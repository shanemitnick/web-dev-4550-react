import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
            <div class="row">
                       <div class="wd-search-section col-12 row ms-1 me-1">
                    <div class="col-11 border rounded-pill bg-color-white">
                        <i class="fa fa-search d-inline pe-2"></i>
                        <input class="form-control d-inline" style="width: 90%; border: none; box-shadow: none" type="text" name="" placeholder="Search Tuiter">
                    </div>
                    <div class="col-1 "> <a href="explore-settings.html">
                        <i class="fa fa-cog fa-2x position-relative top-20 start-70 pt-1 align-middle" ></i> </a>
                    </div>
                </div>
           
           <ul class="row nav mb-2 nav-tabs">
                <ul class="nav nav-tabs mt-2 me-1 ms-1">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">For You</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sports</a>
                    </li>
                    <li class="d-none d-lg-block  nav-item">
                        <a class="nav-link" href="#">Entertainment</a>
                    </li>


                </ul>
           </ul>
            <div class="row mt-1 position-relative">
                <h2 class="position-absolute bottom-0 d-inline mb-2 ms-3 float-end text-white">SpaceX's Starship </h2>
                <img class="img-fluid ms-1" src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" width="100%"/>
            </div>
            
            <div class="mt-2">
              ${PostSummaryList()}
            </div>
           
           </div>

    `);
}

export default ExploreComponent;