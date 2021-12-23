import React from "react";
import Button from "react-bootstrap/button";
    const SubComments = (props) => {  
        const {subcomment} = props
        if (!subcomment) {
              return null
        }           
        else {
         return (
                props.subcomment.map(
                comment =>                   
                <div key={comment.id} className="open-news__comments">
                    <p className="open-subcomments-p">Author: {comment.by}</p>
                    <p className="open-subcomments-p" dangerouslySetInnerHTML={{__html: comment.text}}></p>   
                </div>  
                )
            )
        }
    }

const Comments = (props) => {
    let {comments, commentsLoading, fetchSubcomments, addSubcommentsId} = props;
    const onClickButtonSubcomments = (event, comment) => {
        event.target.classList.add('.hidden')
        addSubcommentsId(event.target.name);
        fetchSubcomments(comment)
    }
    const CommentsContainer = () => {       
        return (         
            comments.map(
                comment =>                   
                <div key={comment.id} className="open-news__comments">
                    <p className="open-comments-p">Author: {comment.by}</p>
                    <p className="open-comments-p" dangerouslySetInnerHTML={{__html: comment.text}}></p>
                    <Button className={comment.button} name={comment.id} onClick={(event) => onClickButtonSubcomments(event, comment.subcommentsNums)}>open comments</Button>
                    <SubComments subcomment={comment.subcomment}/>
                </div>  
            )
        )
    }   
    if (commentsLoading) {
        return (            
                <CommentsContainer />                  
        )
    }
    else return <h4>Идёт загрузка комментариев</h4>
}

export default Comments