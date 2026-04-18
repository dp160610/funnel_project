export default function CaseStudyDetail() {
  return null
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  }
}
