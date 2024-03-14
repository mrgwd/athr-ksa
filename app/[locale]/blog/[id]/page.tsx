const getIDs = async () => {
  const res = await import('@/i18n/messages/en.json')
  return res.default.blog.articles
}
export async function generateStaticParams() {
  const IDs = await getIDs()
  return Object.keys(IDs).map((id) => ({
    id,
  }))
}

export default async function Article({ params }: any) {
  const id = params.id
  return <div>{id}</div>
}
