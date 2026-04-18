import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function CaseStudyDetail() {
  const router = useRouter()
  useEffect(() => { router.replace('/') }, [router])
  return null
}

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' }
}

export async function getStaticProps() {
  return { props: {} }
}
