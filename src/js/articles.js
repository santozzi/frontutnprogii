export const article = (title,done,detail,fecha)=>{return `
<article class="todo_article">
    <div class="todo_title_done">
        <h2 class="todo_title">${title}</h2>
        <button class="todo_done">
                ${fecha}
        </button>
    </div>
    <div class="todo_detail">
        <p>${detail}</p>
    </div>
    ${done ? '<button class="todo_save"><img src="./assets/images/done.png" alt="done"></button>' 
           : '<button class="todo_save"><img src="./assets/images/nodone.png" alt="done"></button>'
    }

</article>
`
}
