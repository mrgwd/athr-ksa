const ids = ['articles', 'tech', 'lifestyle']
export async function generateStaticParams() {
  return ids.map((articlePageId) => ({
    articlePageId,
  }))
}

export default function Page({ params }: any) {
  return <div>{params.articlePageId}</div>
}
