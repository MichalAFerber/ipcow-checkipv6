# IPv6 Address Checker

A lightweight utility hosted on Cloudflare Pages that returns the user's public IP address as plain text. Perfect for CLI usage with `curl` or quick browser checks.

## Usage 

### CLI 
-   Get your IPv6 address: 
    ```bash
    curl https://checkipv6.ipcow.com/
    ```
    Example output: `2606:4700:4700::1001` 

### Browser 
- Visit [https://checkipv6.ipcow.com/](https://checkipv6.ipcow.com/) 
- Displays your IPv6 address if you have one assigned as plain text. 

### How It Works 
- Built with Cloudflare Pages and a single Function (`functions/\[\[path]].js`).
- Uses the `CF-Connecting-IP` header to detect the client’s public IP.
- Returns plain text for simplicity and expanded use cases. 

### Setup 
1. Clone the Repository: 
    ```bash
    git clone https://github.com/MichalAFerber/ipcow-checkipv6.git
    cd ipcow-checkipv6
    ```     
2. Deploy to Cloudflare Pages:
- Link the repository to Cloudflare Pages.
- Set the build output directory to / (no build command needed).
- Deploy! 

3. Custom Domain (optional):
- Add a CNAME record pointing to your Pages project (e.g., your-project.pages.dev).
- Configure in Cloudflare Pages settings.

### Notes  
This service returns only the IPv6 address if assigned, will not retrun an IPv4 address. Use [https://checkip.ipcow.com/](https://checkip.ipcow.com/) instead. For a dual-IP display, check out <https://ipcow.com/>.
No external dependencies—just pure Cloudflare magic. Use at your will, no guarantees implied.

### License  
MIT License - feel free to use, modify, and share!
