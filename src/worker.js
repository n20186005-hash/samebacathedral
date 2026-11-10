/** Static Next export entry. Canonical redirects run before all asset handling. */
const worker = {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === 'www.samebacathedral.com' || (url.hostname === 'samebacathedral.com' && url.protocol !== 'https:')) {
      url.hostname = 'samebacathedral.com';
      url.protocol = 'https:';
      url.port = '';
      return Response.redirect(url.toString(), 308);
    }
    if (!['GET', 'HEAD'].includes(request.method)) {
      return new Response(null, { status: 405, headers: { Allow: 'GET, HEAD', 'X-Robots-Tag': 'noindex' } });
    }
    const errorAlias = /^\/(?:404(?:\.html)?|_not-found)(?:\/|$)/.test(url.pathname);
    let response;
    if (errorAlias) {
      const errorUrl = new URL('/404.html', request.url);
      response = await env.ASSETS.fetch(new Request(errorUrl, { method: request.method }));
      const headers = new Headers(response.headers);
      headers.set('X-Robots-Tag', 'noindex, nofollow');
      return new Response(request.method === 'HEAD' ? null : response.body, { status: 404, headers });
    }
    response = await env.ASSETS.fetch(request);
    if (response.status === 404) {
      const headers = new Headers(response.headers);
      headers.set('X-Robots-Tag', 'noindex, nofollow');
      return new Response(request.method === 'HEAD' ? null : response.body, { status: 404, headers });
    }
    return response;
  },
};

export default worker;
