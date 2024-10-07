'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Header } from '../../../../payload/payload-types'
import { withoutHeaderFooterUrls } from '../../../constants'
import { Gutter } from '../../Gutter'
import { HeaderNav } from '../Nav'

import classes from './index.module.scss'

const HeaderComponent = ({ header }: { header: Header }) => {
  const pathName = usePathname()

  const isWithoutHeaderFooterUrl = withoutHeaderFooterUrls.includes(pathName)

  return (
    <div
      className={[classes.header, isWithoutHeaderFooterUrl && classes.hide]
        .filter(Boolean)
        .join(' ')}
    >
      <Gutter className={classes.wrap}>
        <Link className={classes.logo} href="/">
          Ecommerce
        </Link>

        <HeaderNav header={header} />
      </Gutter>
    </div>
  )
}

export default HeaderComponent
