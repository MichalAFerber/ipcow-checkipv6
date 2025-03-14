export async function onRequest(context) {
    const clientIp = context.request.headers.get('CF-Connecting-IP') || 
                     context.request.headers.get('X-Forwarded-For') || 
                     'Unknown';
    
    const ipList = clientIp.split(',').map(ip => ip.trim());
    let ipv6 = ipList.find(ip => /:/.test(ip) && !/^\d+\.\d+\.\d+\.\d+$/.test(ip)) || 'No IPv6 detected';
  
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