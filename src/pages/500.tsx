import cn from 'clsx'
import { NextSeo } from 'next-seo'

export default function Error500Page() {

  return (
    <>
      <NextSeo
        title='error_500_something_went_wrong_title'
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
