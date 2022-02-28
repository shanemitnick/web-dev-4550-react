const WhoToFollowListItem = who => {
    return (`
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-3 mt-auto mb-auto">
                                <img class="rounded-circle" width="80%" height="auto" src="${who.avatarIcon}" />
                            </div>
                            <div class="col-5">
                                <p class="fw-bold d-inline">${who.userName}</p> <i class="fa fa-check-circle"></i>
                                <p class="text-secondary mb-0">@${who.handle}</p>
                            </div>
                            <div class="col-4 mt-auto mb-auto p-0">
                                <button class="btn btn-primary rounded-pill">Follow</button>
                            </div>
                        </div>
                    </li>
    `)
}

export default WhoToFollowListItem;