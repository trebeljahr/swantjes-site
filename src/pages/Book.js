import React, {useState} from 'react';

const Book = ({color}) => {
  const [page, setPage] = useState(0);

  const previousPage = () => {
      setPage((oldPage)=>oldPage-1)
  }
  const nextPage = () => {
    setPage((oldPage)=>oldPage+1)
}
  return (
    <div className={`fullScreen topLeft pageContainer ${color}`}>
        <div style={{position: 'absolute', top: 0, left: '50%', zIndex: 10, background: 'white'}}>{page}</div>
        <div className='leftPage'>Left Page
            <button onClick={previousPage} className='arrow left' id='previousPageArrow'/>
        </div>
        <div className='rightPage'>Right Page
            <button onClick={nextPage} className='arrow right' id='nextPageArrow'/>
        </div>
    </div>  
  );
}

export default Book
