import { useMemo } from 'react'

import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'

const useIsHome = () => {
  const pathname = usePathname()

  return useMemo(() => pathname === '/', [pathname])
}

export default useIsHome
