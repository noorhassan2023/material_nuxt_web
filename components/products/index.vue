<template>
	<div>
		<div class="container mt-3">
			<div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 product-mar1 ">
				<div class="col card-mar " v-for="item in productList" :key="item.id" data-toggle="modal" data-target="#Buy">
                    <div class=" shadow card-img doctor text-center">
                        <a href="#" class=" card-a">
                            <img class="img-water" 
							         :src="item.vProductImage"
							        :alt="item.vProductName" width="150" height="150">
                            <hr class="hr-margin">	
                            <div class="doctor-edit doctors-name">{{item.vProductName}} {{item.vProductUnit}}</div>
                            <div class="doctors-position1">price</div>
                            <div class="doctor-edit size pb-3 " style="color:#012CDA ;">10.5SAR</div>
                        </a>
                    </div>
                </div>

			</div>
		</div>
		
		<div class="clearfix"></div><br/>
		<div>
			<nav aria-label="Page navigation example">
				<ul class="pagination justify-content-center">
				  <li class="page-item disabled">
					<a class="page-link">Next</a>
				  </li>
				  <li class="page-item"><a class="page-link page-edit" href="#">1</a></li>
				  <li class="page-li page-item"><a class="page-link page-edit" href="#">2</a></li>
				  <li class="page-li page-item"><a class="page-link page-edit" href="#">3</a></li>
				  <li class="page-li page-item"><a class="page-link page-edit" href="#">...</a></li>
				  <li class="page-li page-item"><a class="page-link page-edit" href="#">8</a></li>
				  <li class="page-item">
					<a class="page-link" href="#">Previous</a>
				  </li>
				</ul>
			  </nav>
		</div>
	</div>	
</template>



<script>

export default {
  components: {  },
  props:{ productList: Array}

}
</script>