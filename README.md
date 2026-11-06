# Orion Web

Sitio público de Orion, el escritorio de trading multi-broker. Next.js, listo para Vercel.

## Local

```bash
npm install
npm run dev
```

Abre http://localhost:3000. La raíz redirige al idioma guardado, al del navegador o a español (`/es`).

Idiomas: español, English, português, français, Deutsch, italiano, 中文, 日本語, 한국어, العربية y русский. El selector está en la barra y guarda `orion_locale`.

## Vercel

1. Sube este repositorio a GitHub.
2. En Vercel: Add New → Project → importa el repo. Framework: Next.js.
3. Variables de entorno:

| Variable | Uso |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL canónica, por ejemplo `https://orion.tudominio.com` |
| `NEXT_PUBLIC_DESK_URL` | URL del escritorio (login). Si va vacía, el botón lleva a Contacto. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Correo que abre el formulario. |

4. Deploy. Cada push a la rama de producción vuelve a publicar.

Copia `.env.example` a `.env.local` para probar las variables en local.
