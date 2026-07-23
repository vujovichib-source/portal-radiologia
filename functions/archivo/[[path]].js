export async function onRequest(context) {
  const { params } = context;
  const rawPath = Array.isArray(params.path) ? params.path.join('/') : (params.path || '');
  const supabaseBase = 'https://fojqoanrasazjxyqrwws.supabase.co/storage/v1/object/public/informes/';
  const targetUrl = supabaseBase + rawPath;
  const resp = await fetch(targetUrl);
  const headers = new Headers(resp.headers);
  headers.delete('set-cookie');
  return new Response(resp.body, { status: resp.status, headers });
}