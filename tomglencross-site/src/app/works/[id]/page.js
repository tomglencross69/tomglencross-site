import worksData from '@/app/works/worksData';

export default async function IndividualWorkPage({params}) {
const { id } = await params

    const individualWork = worksData.find((work) => work.urlSlug === id)
  
    return (
        <div>
        <h1>{individualWork.title}</h1>
        <p>{individualWork.description}</p>
        <p>{individualWork.body}</p>
      </div>
  )
}
