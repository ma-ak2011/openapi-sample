export const pagesPath = {
  "login": {
    $url: (url?: { hash?: string | undefined } | undefined) => ({ pathname: '/login' as const, hash: url?.hash })
  },
  "my_page": {
    $url: (url?: { hash?: string | undefined } | undefined) => ({ pathname: '/my_page' as const, hash: url?.hash })
  },
  "staff": {
    _sid: (sid: string | number) => ({
      "edit": {
        $url: (url?: { hash?: string | undefined } | undefined) => ({ pathname: '/staff/[sid]/edit' as const, query: { sid }, hash: url?.hash })
      },
      $url: (url?: { hash?: string | undefined } | undefined) => ({ pathname: '/staff/[sid]' as const, query: { sid }, hash: url?.hash })
    }),
    "create": {
      $url: (url?: { hash?: string | undefined } | undefined) => ({ pathname: '/staff/create' as const, hash: url?.hash })
    },
    $url: (url?: { hash?: string | undefined } | undefined) => ({ pathname: '/staff' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string | undefined } | undefined) => ({ pathname: '/' as const, hash: url?.hash })
};

export type PagesPath = typeof pagesPath;

export const staticPath = {
  favicon_ico: '/favicon.ico',
  leassell_png: '/leassell.png',
  next_svg: '/next.svg',
  vercel_svg: '/vercel.svg'
} as const;

export type StaticPath = typeof staticPath;
