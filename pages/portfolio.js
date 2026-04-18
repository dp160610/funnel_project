export default function PortfolioPage() {
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
