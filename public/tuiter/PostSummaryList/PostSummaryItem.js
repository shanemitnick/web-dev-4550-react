const PostSummaryItem = (post) => {
    return(`
            <div class="row border pt-1 me-1 ms-1">
                <div class="col-9">
                     <p class="text-secondary mb-0">${post.topic}</p>
                    <p class="fw-bold d-inline"> ${post.userName} <i class="fa fa-check-circle"></i>   </p> <p class="text-secondary d-inline"> - 2h</p>

                    <p class="fw-bold mb-0"> ${post.title}</p>
                    <p class="text-secondary mt-0 mb-0">${post.tweets}</p>

                </div>

                <div class="col-3">
                    <img width="96px" class="float-end rounded-3" src=${post.imageURL} >
                </div>


            </div>
    `);
}

export default PostSummaryItem;