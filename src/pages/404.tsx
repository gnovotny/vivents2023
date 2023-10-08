import cn from 'clsx'
import { NextSeo } from 'next-seo'

export default function Error404Page() {

  return (
    <>
      <NextSeo
        title='error_404_not_found'
        noindex
      />
      <div
        className={cn(
          'w-full h-full'
        )}
      >
        error_500_something_went_wrong_description
      </div>
    </>
  )
}
