import React, {useState} from 'react';

export const Book = ({color, content}) => {
  const [page, setPage] = useState(0);

  const previousPage = () => {
    setPage((oldPage)=>{
      if (page > 0) {
        return oldPage-1
      }
      return oldPage
    })  
  }

  const nextPage = () => {
      setPage((oldPage)=>{
        if (page < content.left.length-1 && page < content.right.length-1) {
          return oldPage+1
        }
        return oldPage
      })
  }

  return (
    <div className={`fullScreen topLeft pageContainer ${color}`}>
        <div className='leftPage center'>
          {content && content.left && content.left[page]}
          {page > 0 && <i onClick={previousPage} className='arrow left' id='previousPageArrow'/>}
          <div className='pageNumber' style={{left: "5vw"}}>{(page+1)*2-1}</div>
        </div>
        <div className="pageDivider"/>
        <div className='rightPage center'>
            {content && content.right && content.right[page]}
            {page < content.right.length-1 && <i onClick={nextPage} className='arrow right' id='nextPageArrow'/>}
            <div className='pageNumber'  style={{right: "5vw"}}>{(page+1)*2}</div>
        </div>
    </div>  
  );
}

export const RPage = ({children}) => {
  return <Page orientation={'right'}>{children}</Page>
}

export const LPage = ({children}) => {
  return <Page orientation={'left'}>{children}</Page>
}

const Page = ({children, orientation}) => {
  return <div className={`${orientation}-page-content`}>
    {children}
  </div>
}

