export async function onRequest(context) {
    const clientIp = context.request.headers.get('CF-Connecting-IP') || 
                     context.request.headers.get('X-Forwarded-For') || 
                     'Unknown';
    
    const ipList = clientIp.split(',').map(ip => ip.trim());
    let ipv6 = ipList.find(ip => /:/.test(ip) && !/^\d+\.\d+\.\d+\.\d+$/.test(ip));
  
    // If no IPv6 in headers, attempt to fetch it via an external service (optional)
    if (!ipv6) {
      // Since CF-Connecting-IP only shows the connecting IP, we could fetch from an external API,
      // but for simplicity, we'll assume "Unavailable" if not in headers
      ipv6 = 'No IPv6 detected';
    }
  
    const { pathname } = new URL(context.request.url);
    if (pathname === '/' || pathname === '') {
      return new Response(ipv6, {
        status: 200,
        headers: { 
          'Content-Type': 'text/plain', 
          'Cache-Control': 'no-store',
          'Access-Control-Allow-Origin': '*' // Allow dev.ipcow.com
        }
      });
    }
  
    return context.next();
  }