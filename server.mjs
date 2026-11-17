import http from 'http';
import { readFile, stat } from 'fs/promises';
import { join, normalize, extname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = '/workspace';
const PORT = process.env.PORT || 4173;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.ts': 'text/javascript; charset=utf-8',
  '.tsx': 'text/javascript; charset=utf-8',
  '.jsx': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.ogg': 'audio/ogg',
  '.ico': 'image/x-icon',
  '.map': 'application/json',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

const server = http.createServer(async (req, res) => {
  try {
    // Parse pathname (strip ?v= query and hash)
    const url = new URL(req.url, `http://${req.headers.host}`);
    let pathname = decodeURIComponent(url.pathname);

    // Default to index.html
    if (pathname === '/' || pathname === '') pathname = '/index.html';

    // Resolve safely within ROOT
    const filePath = normalize(join(ROOT, pathname));
    if (!filePath.startsWith(ROOT)) {
      res.writeHead(403); res.end('Forbidden'); return;
    }

    let s;
    try { s = await stat(filePath); } catch { 
      res.writeHead(404); res.end('Not Found'); return; 
    }
    if (s.isDirectory()) {
      // try index.html in dir
      try {
        const idx = join(filePath, 'index.html');
        await stat(idx);
        const data = await readFile(idx);
        res.writeHead(200, { 'Content-Type': MIME['.html'] });
        res.end(data); return;
      } catch {
        res.writeHead(404); res.end('Not Found'); return;
      }
    }

    const data = await readFile(filePath);
    const ext = extname(filePath).toLowerCase();
    res.writeHead(200, {
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
    });
    res.end(data);
  } catch (e) {
    res.writeHead(500); res.end('Server Error: ' + e.message);
  }
});

server.listen(PORT, () => {
  console.log(`Fly game server running at http://localhost:${PORT}`);
});
