/*jquery functions start*/

var current_target_url = "http://localhost:3000/api2/2.2/get_approval_matrix_data";
var backSiteUrl = "http://localhost/ppi_people";

  (function($){

    var changeChartView = 0;

    var matrix          = null;

    var selectedView    = (typeof sessionStorage.getItem('session_view') !== 'undefined' &&
                            sessionStorage.getItem('session_view') !== null) ? sessionStorage.getItem('session_view') : 3;

    var number = (typeof sessionStorage.getItem('session_number') !== 'undefined' &&
                  sessionStorage.getItem('session_number') !== null) ? sessionStorage.getItem('session_number') : 1;

    var color_change = (typeof sessionStorage.getItem('colorChange') !== 'undefined' &&
                        sessionStorage.getItem('colorChange') !== null) ? sessionStorage.getItem('colorChange') : 1;

    var filterBranch = filterCountry = filterCity = filterJobGroup = filterJobFamily = filterDepartment = filterDesignation = filterBand = '';

    var open_chart = (typeof sessionStorage.getItem('open_chart') !== 'undefined' &&
    sessionStorage.getItem('open_chart') !== null) ? sessionStorage.getItem('open_chart') : "false";
    var session_view = (typeof sessionStorage.getItem('session_view') !== 'undefined' &&
    sessionStorage.getItem('session_view') !== null) ? sessionStorage.getItem('session_view') : "3";
    var session_number = (typeof sessionStorage.getItem('session_number') !== 'undefined' &&
    sessionStorage.getItem('session_number') !== null) ? sessionStorage.getItem('session_number') : "1";
    var session_color = (typeof sessionStorage.getItem('session_color') !== 'undefined' &&
    sessionStorage.getItem('session_color') !== null) ? sessionStorage.getItem('session_color') : "1";
    var session_filter = (typeof sessionStorage.getItem('session_filter') !== 'undefined' &&
    sessionStorage.getItem('session_filter') !== null) ? sessionStorage.getItem('session_filter') : "";
	
	var orgStructureUrl = (typeof localStorage.getItem('host') !== 'undefined' &&
	  localStorage.getItem('host') !== null) ? JSON.parse(localStorage.getItem('host')) : "";

	var employeeName = (typeof localStorage.getItem('emp_name') !== 'undefined' &&
	  localStorage.getItem('emp_name') !== null) ? JSON.parse(localStorage.getItem('emp_name')) : "HR";

    $(document).on("click", "#submitform", function(e){

        e.preventDefault();

        if($('.chart_holder').is(":visible") === true) {
        
          filterCountry = $("#country").val();
          filterCity = $("#city").val();
          filterBranch = $("#branch").val();
          filterJobGroup = $("#job_group").val();
          filterJobFamily = $("#job_family").val();
          filterDepartment = $("#department").val();
          filterDesignation = $("#designation").val();
          filterBand = $("#band").val();

          var filterData =  "&branch="+filterBranch+"&country="+filterCountry+"&city="+filterCity
                            +"&group="+filterJobGroup+"&family="+filterJobFamily+"&department="+filterDepartment
                            +"&designation="+filterDesignation+"&band="+filterBand;

          sessionStorage.setItem("session_filter", filterData);

          populateOrgChart( selectedView, number, color_change, filterData );

        }

    });

    $(document).on('change', "#image_colors", function(){

      color_change = $(this).val();

      sessionStorage.setItem("session_view", selectedView);
      sessionStorage.setItem("session_number", number);
      sessionStorage.setItem("session_color", color_change);

      $("#top_img").click();

      if( "1" == color_change) {

        $(".orgchart").find(".colored_images").addClass("black_image").removeClass("colored_images");

      }
      else {

        $(".orgchart").find(".black_image").addClass("colored_images").removeClass("black_image");

      }

    });

    $(document).on('change', '#preset_view', function() {

      var selectedVal = $(this).val();

      $("#filter_heading").text("("+$( "#preset_view option:selected" ).text()+")");

      selectedView = selectedVal;

      $("#top_img").click();

      sessionStorage.setItem("session_view", selectedVal);
      sessionStorage.setItem("session_number", number);
      sessionStorage.setItem("session_color", color_change);

      var numberNo = 1;

      /*if(selectedView == 3 || selectedView == 4){

        numberNo = 1;

      }
      else {

        numberNo = number;

      }*/

      numberNo = number;
    
      filterCountry = $("#country").val();
      filterCity = $("#city").val();
      filterBranch = $("#branch").val();
      filterJobGroup = $("#job_group").val();
      filterJobFamily = $("#job_family").val();
      filterDepartment = $("#department").val();
      filterDesignation = $("#designation").val();
      filterBand = $("#band").val();

      var filterData =  "&branch="+filterBranch+"&country="+filterCountry+"&city="+filterCity
                        +"&group="+filterJobGroup+"&family="+filterJobFamily+"&department="+filterDepartment
                        +"&designation="+filterDesignation+"&band="+filterBand;

      sessionStorage.setItem("session_filter", filterData);

      populateOrgChart( selectedView, number, color_change, filterData );

      changeChartView = changeChartView + 2;

    });

    $(document).on('change', '#themes', function() {

      number = $(this).val();

      sessionStorage.setItem("session_view", selectedView);
      sessionStorage.setItem("session_number", number);
      sessionStorage.setItem("session_color", color_change);

      $("#top_img").click();
    

      var numberNo = 1;

      /*if(selectedView == 3 || selectedView == 4){

        numberNo = 1;

      }
      else {

        numberNo = number;

      }*/

      numberNo = number;

      filterCountry = $("#country").val();
      filterCity = $("#city").val();
      filterBranch = $("#branch").val();
      filterJobGroup = $("#job_group").val();
      filterJobFamily = $("#job_family").val();
      filterDepartment = $("#department").val();
      filterDesignation = $("#designation").val();
      filterBand = $("#band").val();

      var filterData =  "&branch="+filterBranch+"&country="+filterCountry+"&city="+filterCity
                        +"&group="+filterJobGroup+"&family="+filterJobFamily+"&department="+filterDepartment
                        +"&designation="+filterDesignation+"&band="+filterBand;

      sessionStorage.setItem("session_filter", filterData);

      populateOrgChart( selectedView, number, color_change, filterData );

      changeChartView = changeChartView + 2;
    
    });
    
    $(document).on('click', '.show_orgchart', function(e){
      e.preventDefault();

      sessionStorage.setItem("open_chart", "true");
      
        filterCountry = $("#country").val();
        filterCity = $("#city").val();
        filterBranch = $("#branch").val();
        filterJobGroup = $("#job_group").val();
        filterJobFamily = $("#job_family").val();
        filterDepartment = $("#department").val();
        filterDesignation = $("#designation").val();
        filterBand = $("#band").val();

        var filterData =  "&branch="+filterBranch+"&country="+filterCountry+"&city="+filterCity
                          +"&group="+filterJobGroup+"&family="+filterJobFamily+"&department="+filterDepartment
                          +"&designation="+filterDesignation+"&band="+filterBand;

        selectedView  = (typeof sessionStorage.getItem('session_view') !== 'undefined' &&
            sessionStorage.getItem('session_view') !== null) ? sessionStorage.getItem('session_view') : selectedView;

        sessionStorage.setItem("session_view", selectedView);
        sessionStorage.setItem("session_number", number);
        sessionStorage.setItem("session_color", color_change);
        sessionStorage.setItem("session_filter", filterData);

          populateOrgChart( selectedView, number, color_change, filterData );

      
    });

    $(document).on('click', '#close_orgchart', function(e){
      e.preventDefault();
      sessionStorage.setItem("open_chart", "false");
      sessionStorage.setItem('session_view', "3");
      sessionStorage.setItem('session_number', "1");
      sessionStorage.setItem('session_color', "1");

      $(".chart_holder").hide();
    });

    if (performance.navigation.type == 1) {
      $('#close_orgchart').click();
    }
    
    var getId = function() {
        return (new Date().getTime()) * 1000 + Math.floor(Math.random() * 1001);
      };
  
    var nodeTemplate = function(data) {

        var numberNo = 1;

        var departmentViewPopupShower = null;

        if(selectedView == 3 || selectedView == 4){

          numberNo = number;
          departmentViewPopupShower = true;

        }
        else {

          numberNo = number;
          departmentViewPopupShower = false;

        }

        return getNodeTemplate( data, numberNo, departmentViewPopupShower );
      };
      
    
      
    var oldId = null;

    var counter = 0;

    $(document).on("click", "a.node_options", function(e){
  
      if( !e ) e = window.event;

      $node = e.currentTarget

      e.preventDefault();

      var nodeId = $($node).attr('id');

      var rawId = ( (typeof(nodeId) === 'string') && (typeof(nodeId) !== 'undefined') ) ? nodeId.split("_") : false;

      var options = {direction: 'right'}; //effect options

      var effect = 'linear';

      if(rawId) {

        var nodeId = '#men_'+rawId[1]+'_'+rawId[2];

        if(oldId !== null && rawId[1]+'_'+rawId[2] == oldId) {

          ++counter;

        }
        else if(oldId !== null && rawId[1]+'_'+rawId[2] != oldId) {

          counter = 0;

        }

        if(counter == 0) {

          $(".orgchart").find(".menu-show").removeClass("menu-show");
          
          

          setTimeout(function(){
            $(nodeId).addClass("menu-show");
          }, 100);
          

        }
        else {

            if(0 === (counter % 2)) {

              $(nodeId).addClass("menu-show");

            }
            else {

              $(".orgchart").find(".menu-show").removeClass("menu-show");
              $(nodeId).hide();

            }

        }

      }
      else {
        alert("error on opening menu");
      }

      oldId = rawId[1]+"_"+rawId[2];
    });

    $(document).on("click", ".orgchart", function(e) {

      if( !e ) e = window.event;

      if(
        e.target.className !== 'fa fa-ellipsis-h' && e.target.className !== 'menu-0-0'
        && e.target.className !== 'menu menu-show' && e.target.className !== 'menu-list'
        && e.target.className !== 'menu-0'
        ) {

        $(this).find(".menu-show").removeClass("menu-show");

        oldId = null;

        counter = 0;

      }

      e.preventDefault();

    });
      
//    $(document).on("click", ".node", function(e) {
//
//        if( !e ) e = window.event;
//
//        if(
//          e.target.className !== 'fa fa-ellipsis-h' && e.target.className !== 'menu-0-0'
//          && e.target.className !== 'menu menu-show' && e.target.className !== 'menu-list'
//          && e.target.className !== 'menu-0'
//          ) {
//
//          $(this).find(".menu-show").removeClass("menu-show");
//
//          oldId = null;
//
//          counter = 0;
//
//        }
//
//    });


      /*setTimeout(function(){

        var total_length = $('.orgchart > table > tr').length;

        if(total_length > 0) {

          $('.orgchart > table > tr').each(function(i, e){

            if(i >= 1 && i<(total_length - 1)) {
              $(e).hide();
            } 
          });
        }
        //$('.orgchart > table > tr:nth-child(-n+3)').hide();
      }, 100);*/

      // map popup clicks

      $(document).on('click', '#zoom_in', function(){

          var e = new WheelEvent("wheel", {deltaY: -100});
          document.getElementById('chart-container').dispatchEvent(e);

      });

      $(document).on('click', '#zoom_out', function(){

          var e = new WheelEvent("wheel", {deltaY: 100});
          document.getElementById('chart-container').dispatchEvent(e);

      });

        var count_opener = 1;

      $(document).on('click','#btn_expand', function(e){
      });
        
      $(document).on('click', '.closecc', function(e){
          
          e.preventDefault();
          
          $("#detail-modal").hide("puff");
          $("#reporting-modal").hide("puff");
          
      });

      $(document).on('click', '#recenter_chart', function(e) {

        e.preventDefault();

        if($('.chart_holder').is(":visible") === false) { 

        }
        else {

          matrix = null;

          centerMoveChart('init', true);

        }

      });

      $(document).on('click', '#reset_chart', function(e) {

        e.preventDefault();

        if($('.chart_holder').is(":visible") === false) { 

        }
        else {

          populateOrgChart( selectedView, number, color_change );

          setTimeout(function(){

            $('#recenter_chart').click();

          }, 2000);

        }

        

      });

var counterChecker = 0;

function populateOrgChart( option = 1, number = 1, color_change = 1, filter_data = '' ) {

  popupViewer = false;

  $("#close_drawer").val("1");

  current_target_url = "http://localhost:3000/api2/2.2/get_approval_matrix_data";

  $('.chart_holder').show();

  if(number == 1) {
    $("#dynamic_css_handler").html('<link id="remove_classic" rel="stylesheet" type="text/css" href="'+imageUl+'assets/orgchart/css/theme_classic.css">');
    $("#remove_advance1").remove();
    $("#remove_advance2").remove();
  }
  else if(number == 2) {        
    $("#dynamic_css_handler").html('<link id="remove_advance1" rel="stylesheet" type="text/css" href="'+imageUl+'assets/orgchart/css/theme_advance.css">');
    $("#remove_classic").remove();
    $("#remove_advance2").remove();
  }
  else if(number == 3) {        
    $("#dynamic_css_handler").html('<link id="remove_advance2" rel="stylesheet" type="text/css" href="'+imageUl+'assets/orgchart/css/theme_advance_2.css">');
    $("#remove_classic").remove();
    $("#remove_advance1").remove();
  }



  if(option == 1 || option == 2) {
    $("#dynamic_css_handler").append('<link rel="stylesheet" type="text/css" href="'+imageUl+'assets/orgchart/css/hide_first_node.css">');
  }

  if(option == 3) {
    $("#dynamic_css_handler").append('<link rel="stylesheet" id="remove_css" type="text/css" href="'+imageUl+'assets/orgchart/css/department_expand_view.css">');
  }

  if(option == 4) {
    $("#dynamic_css_handler").append('<link rel="stylesheet" type="text/css" href="'+imageUl+'assets/orgchart/css/department_only_expand_view.css">');
    $("#remove_css").remove();
  }

  var parentNodeId = null;

  $("#chart-container").empty();

  var filterDetails = "";

  if(filter_data == '') {

    filterDetails = "&filter=0"+filter_data;

  }
  else {
    filterDetails = "&filter=1"+filter_data;
  }

  var oc = $('#chart-container').orgchart({

    'data' : current_target_url+"?action=1&op="+option+filterDetails,
    'nodeContent': 'title',
    'zoomDuration': '0.99s',
    'draggable': false,
    'pan': true,
    'zoom': true,
    'toggleSiblingsResp': false,
    'hideLeftChild' : true,
    'hideRightChild' : true,
    'hdieTopChild' : true,
    'zoominLimit' : 9,
    'zoomoutLimit' : 0.1,
    'visibleLevel' : 9999,
//            'verticalLevel': 3,
    'nodeTemplate': nodeTemplate,
    'dropCriteria': function($draggedNode, $dragZone, $dropZone) {
      return true;
    },
    'createNode': function($node, data) {

      if(option != 3) {

        $randomId = getId()+"_"+data.id;
        $node[0].id = $randomId;
        $($node[0]).find('a.node_options').attr('id', 'act_'+$randomId);
        $($node[0]).find('.menu').attr('id', 'men_'+$randomId);

        if(null !== parentNodeId) {
          setTimeout(function(){

            $("#"+parentNodeId).parents(".nodes").parents("table").eq(0).children("tr").eq(0)
            .find(".fa-plus-circle").addClass("fa-minus-circle").removeClass("fa-plus-circle");

          }, 50);
        }

        parentNodeId = $randomId;
      }
    },
    'initCompleted' : function() {
        setTimeout(function(){
          if( "1" == color_change || null == color_change) {

            $(".orgchart").find(".colored_images").addClass("black_image").removeClass("colored_images");
      
          }
          else {
      
            $(".orgchart").find(".black_image").addClass("colored_images").removeClass("black_image");
      
          }
        }, 2500);
    }
  });

  // node functions customizations popups

  oc.$chart.on('nodedrop.orgchart', function(event, extraParams) {
        console.log('draggedNode:' + extraParams.draggedNode.children('.title').text()
          + ', dragZone:' + extraParams.dragZone.children('.title').text()
          + ', dropZone:' + extraParams.dropZone.children('.title').text()
        );
      });

  oc.$chart.on('chartcompleted.orgchart', function(event) {

    centerMoveChart("init", true);

  });

  oc.$chart.on('hidechildnode.orgchart', function(event) {

    var transformedVal = $('.orgchart').css('transform');

    matrix = transformedVal;

    centerMoveChart("init", false);

  });

  oc.$chart.on('showchildnode.orgchart', function(event) {

    var transformedVal = $('.orgchart').css('transform');

    matrix = transformedVal;

    centerMoveChart("init", false);

  });

  oc.$chart.on('panEndHandler', function(e) {

    var transformedVal = $('.orgchart').css('transform');

    matrix = transformedVal;

  });

  $(document).on('click', '.menu-0-0', function(e){

    if( !e ) e = window.event;

    var $node = $(e.currentTarget).parents("div.node").eq(0);

    var action = $(e.target).data("action");

    e.preventDefault();

    if(action === 'add') {

      var currentNodeId = getId();

      var nodeData = [{
        'name': '',
        'title': 'vacant position',
        'desc': '',
        'image': '<span style="background-image: url('+imageUl+'assets/orgchart/img/male.png)"></span>',
        'id': currentNodeId
      }];

      var hasChild = $node.parent().attr('colspan') > 0 ? true : false;

      if (!hasChild) {
        oc.addChildren($node, nodeData);
      } else {
        oc.addSiblings($node.closest('tr').siblings('.nodes').find('.node:first'), nodeData);
      }

    }
    else if(action === 'delete') {

      if (!window.confirm('Are you sure you want to delete the whole chart?')) {
          return;
      }
      oc.removeNodes($node);
      $('#selected-node').val('').data('node', null);

    }
    else if(action === 'details') {

      if(changeChartView === 0) {

        var id = "#"+$($node).attr("id");

        var get_modal_data = showDataModal(id);

      }
      else if( (counterChecker % changeChartView) === 0) {

        var id = "#"+$($node).attr("id");

        var get_modal_data = showDataModal(id);

      }

      //$("#detail-modal").modal("show");

    }
    else if(action === 'op_popup') {

      var id = "#"+$($node).attr("id");

      show_reporting_popup( id );

    }

    $(".orgchart").find(".menu-show").removeClass("menu-show");

    oldId = null;

    counter = 0;
    counterChecker++;

  });

  selectedView = 3;
  
}

function getNodeTemplate( data, template_no, departmentView = null ) {

  var template = null;

  if( template_no == 1 ) {

    template = `<div class="node_container_1">
                    <div class="action_buttons">
                            <a href="#" class="node_options"><i class="fa fa-ellipsis-h"></i></a>
                            <nav class="menu">
                              <span class="menu-list">
                                    <a href="#">X</a>
                                    <span class='menu-0'><a href="#" data-action="details" class='menu-0-0'>View Employee Details</a></span>`;
    if( departmentView )  {
      
      //template += `<span class="menu-0"><a href="#" data-action="op_popup" class="menu-0-0">View Reporting</a></span>`;

    }

    template += `<!-- <span class='menu-0'><a href="#" data-action="add" class='menu-0-0'>Add Employee Below</a></span>
                                    <span class='menu-0'><a href="#" data-action="delete" class='menu-0-0'>Remove Current Employee</a></span>-->
                              </span>
                            </nav>
                    </div>
                    <div class="node_header">
                        <p>${data.name}</p>
                    </div>
                    <div class="node_content">
                        <div class="node_image_1">
                          ${data.image}
                        </div>
                        <div class="node_details">
                            <p>${data.title}</p>
                            <p class="comp_name" title="${data.companyname}">${data.companyname}</p>
                            <p class="bands" title="${data.band}">${data.band}</p>
                        </div>
                    </div>
                </div>`;

  }
  else if( template_no == 2 || template_no == 3 ) {

    template = `<div class="node_container">
                  <div class="action_buttons">
                  <a href="#" class="node_options"><i class="fa fa-ellipsis-h"></i></a>
                  <nav class="menu">
                    <span class="menu-list">
                          <a href="#">X</a>
                          <span class='menu-0'><a href="#" data-action="details" class='menu-0-0'>View Employee Details</a></span>
                          <!-- <span class='menu-0'><a href="#" data-action="add" class='menu-0-0'>Add Employee Below</a></span>
                          <span class='menu-0'><a href="#" data-action="delete" class='menu-0-0'>Remove Current Employee</a></span>-->
                    </span>
                  </nav>
                  </div>
                  <div class="node_image">
                    <div class="border-div">
                      ${data.image}
                    </div>
                  </div>  
                  <div class="node_content">
                    <p class="node_title" title="${data.name}">${data.name}</p>
                    <p class="node_position" title="${data.title}">${data.title}</p>
                  </div>
                </div>`;

  }

  return template;

}

function showDataModal(id) {
    
      current_target_url = "http://localhost:3000/api2/2.2/get_single_employee_data";

      $.ajax({
        url: current_target_url,
        method: 'POST',
        dataType: 'json',
        data: {'action': '2', 'details': id},
        success: function(res) {

          let fullWidth = '';
		  
		  let desLink = (typeof localStorage.getItem('link') !== 'undefined' 
                  && localStorage.getItem('link') !== null) ? 
                  localStorage.getItem('link') : "";			
		  
		  let routingLink = backSiteUrl+'/login.php'+'?'
                        "mt=aes&des=empinformationhr.php"+
                        "&route="+desLink;
      if(res.length > 1) {
        fullWidth = 'width: 100% !important; max-width: 100% !important';
      }

      let html = `<div id="myModal" class="modal modalcc fade" role="dialog" >
                  <div class="modal-dialog" style="`+fullWidth+`" >
                
                    <!-- Modal content-->
                    <div class="modalcc-content modal-content">
                      <button type="button" class="close" data-dismiss="modal">&times;</button>`;

          if( res.length > 1 ) {

            html += `<div class="modal-body" id="detail-modal-datacontainer">
                        <table class="table table-striped">
                        <thead>
                            <tr>
                                <td>Sr #</td>
                                <td>Picture</td>
                                <td>Name</td>
                                <td>Employee Code</td>
                                <td>Designation</td>
                                <td>Band</td>
                                <td>Department</td>
                                <td>Date of Joining</td>
                                <td>Gender</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        <tbody>`;

            var counter = 1;
            
            for(var k in res) {

              let picture = '';

              if(res[k]['picture'] == '' || res[k]['picture'] == null || res[k]['picture'] == 'undefined') {

                if ( res[k]['picture'].toLowerCase() == 'male' ||  res[k]['picture'].toLowerCase() == 'mr.' ) {
                        
                    picture = imageUIServer+"assets/orgchart/img/male.png";
                    
                }
                else {
                    
                    picture = imageUIServer+"assets/orgchart/img/female.jpg";
                    
                }

              }
              else {

                picture = imageUIServer+'emp_pictures/'+res[k]['picture'];

              }
			  
			  let extraParams = { 'empid': window.btoa(res[k]['id']) };
			  let url_link = '';
			  if (desLink == 'hr') { 
				url_link = `<a href="" onclick="return ajaxRouteBack(event)" data-extraParams="`+encodeURIComponent(JSON.stringify(extraParams))+`"
                    class="card-link">View Profile</a>`
			  }else {
				  url_link = `<p class="card-link">View Profile</p>`;
			  }
							

              html += `<tr>
                                <td>`+counter+`</td>
                                <td>
                                    <div class="card-img-top node_image_1" style="width: 100px; height: 100px;">
                                        <span class="black_image" style="background-image: url(`+picture+`)"></span>
                                    </div>
                                </td>
                                <td>`+res[k]['name']+`</td>
                                <td>`+res[k]['empcode']+`</td>
                                <td>`+res[k]['designation_name']+`</td>
                                <td>`+res[k]['band']+`</td>
                                <td>`+res[k]['department']+`</td>
                                <td>`+res[k]['doj']+`</td>
                                <td>`+res[k]['gender']+`</td>
                                <td>
                                    `+url_link+`
                                </td>
                            </tr>`;

              counter++;

            }

            html += `</div>`;

          }
          else {

            let data = res[0];

            let picture = '';

            if(data['picture'] == '' || data['picture'] == null || data['picture'] == 'undefined') {

              if ( data['gender'].toLowerCase() == 'male' ||  data['name_salute'].toLowerCase() == 'mr.' ) {
                      
                  picture = imageUIServer+"assets/orgchart/img/male.png";
                  
              }
              else {
                  
                  picture = imageUIServer+"assets/orgchart/img/female.jpg";
                  
              }

            }
            else {

              picture = imageUIServer+'emp_pictures/'+data['picture'];

            }
			
			let extraParams = { 'empid': window.btoa(data['id']) };
			
			let url_link = '';
			if (desLink == 'hr') { 
        
        url_link = `<a href="" onclick="return ajaxRouteBack(event)" data-extraParams="`+encodeURIComponent(JSON.stringify(extraParams))+`"
                    class="card-link">View Profile</a>` 
			}else {
				url_link = `<p class="card-link">View Profile</p>`
			}

            html += `<div class="modal-body" id="detail-modal-datacontainer">
                      <div class="card" class="col-xs-12">
                        
                      <div class="card-img-top node_image_1">
                          <span class="black_image" 
                          style="background-image: url(`+picture+`)">
                          </span>
                      </div>
                          <div class="card-body">
                              <h6 class="card-title text-primary h4">
                                  <strong>`+data['name']+`</strong>
                                  <p class="empcode pull-right">`+data['empcode']+`</p>
                              </h6>
                              
                          </div>
                          <ul class="list-group list-group-flush">
                          
                          <li class="list-group-item">
                            <div class="row">
                              <div class="col-sm-9">Designation: `+data['designation_name']+`</div>
                              <div class="col-sm-3">Band: `+data['band']+`</div>
                            </div>
                          </li>
                          <li class="list-group-item">
                            <div class="row">
                              <div class="col-sm-12">
                                Job Group: `+data['job_grouop']+`
                              </div>
                            </div>
                          </li>
                          <li class="list-group-item">
                            <div class="row">
                              <div class="col-sm-12">
                                Job Family: `+data['job_families']+`
                              </div>
                            </div>
                          </li>
                          <li class="list-group-item">
                            <div class="row">
                              <div class="col-sm-8">Department: `+data['department']+`</div>
                              <div class="col-sm-4">Sub Depart: `+data['sub_department']+`</div>
                            </div>
                          </li>
                          <li class="list-group-item">
                              <div class="row">
                                <div class="col-sm-8">Date of Joining: `+data['doj']+`</div>
                                <div class="col-sm-4">Gender: `+data['gender']+`</div>
                              </div>
                          </li>
                          </ul>
                          <div class="card-body">
                          `+url_link+`
                          </div>
                      </div>
                      </div>`;

          }

          html += `</div>
                    </div>
                      </div>`;
          
          $('#detail-modal').html( html );

          setTimeout(function(){
            $('#myModal').modal('show');
          }, 1000);

          if( "1" == color_change) {

            $(".card-img-top").find(".colored_images").addClass("black_image").removeClass("colored_images");
  
          }
          else {

            $(".card-img-top").find(".black_image").addClass("colored_images").removeClass("black_image");
  
          }          

        },
        error: function(err) {
          console.log(err);
        }
      });
      
}
  
function centerMoveChart(checkAction, move_scrolls = true) {
    
      var outerContent = $('#chart-container');
      var innerContent = $('#chart-container > div.orgchart');

      var x_axis = (innerContent.width() - outerContent.width()) / 2;
      var y_axis = (innerContent.height() - outerContent.height()) / 2;

      if( matrix === null ) {

          matrix = 'matrix(0.2, 0, 0, 0.2, 0, 0)';

      }

      setTimeout(function(){
          
          if( move_scrolls ) {

            if(checkAction == 'show') {
                
                outerContent.scrollLeft( x_axis );
                // outerContent.scrollTop( y_axis );
                
            }
            else if(checkAction == 'hide') {
                
              outerContent.scrollRight( x_axis );
              // outerContent.scrollTop( y_axis );
                
            }
            else {
                
                outerContent.scrollLeft( x_axis );
                // outerContent.scrollTop( y_axis );
                
            }

          }

          x_axis1 = y_axis2 = 0;
          
          $(".orgchart").css({
            'transform'         : matrix,
            '-moz-transform'    : matrix,
            '-webkit-transform' : matrix,
            '-o-transform'      : matrix,
            'transform-origin'  : 'center top',
            'cursor': 'move',
            'cursor': '-webkit-grab',
            'cursor': 'grab',

          });
          
      }, 100);
    
}

var reporting_popup = 0;

function show_reporting_popup( id ) {

  $("#reporting_chart").empty();

      var options = { percent: 100 };

      popupViewer = true;

      var splittedId = id.split("_");

      $("#reporting-modal").modal("show");

      current_target_url = "http://localhost:3000/api2/2.2/get_approval_matrix_data";

      var oc2 = $('#reporting_chart').orgchart({
        'data' : current_target_url+"?action=1&op=1&s="+splittedId['1'],
        'nodeContent': 'title',
        'zoomDuration': '0.45s',
        'draggable': false,
        'pan': true,
        'zoom': true,
        'toggleSiblingsResp': false,
        'hideLeftChild' : true,
        'hideRightChild' : true,
        'hdieTopChild' : true,
        'zoominLimit' : 9,
        'zoomoutLimit' : 0.1,
        'visibleLevel' : 9999,
    //            'verticalLevel': 3,
        'nodeTemplate': nodeTemplate,
        'dropCriteria': function($draggedNode, $dragZone, $dropZone) {
          return true;
        },
        'createNode': function($node, data) {

          
        },
        'initCompleted' : function() {
            setTimeout(function(){
              if( "1" == color_change || null == color_change) {

                $(".orgchart").find(".colored_images").addClass("black_image").removeClass("colored_images");
          
              }
              else {
          
                $(".orgchart").find(".black_image").addClass("colored_images").removeClass("black_image");
          
              }
            }, 2500);
        }
      });

  
}

jQuery(window).ready(function(){
  setTimeout(function(){
	  
	  if(selectedView == '4') {
		  $("#preset_view").val(selectedView);
		  $('.chart_holder').show();
	  }
	  else {
    
		$("#preset_view").val(selectedView);
	  
		if(open_chart == "true") {
		  
			populateOrgChart(session_view, session_number, session_color, session_filter);

		}
	
	}
  
  }, 2500);

});  
    })(jq);
    /*jquery functions end*/

$(document.body).on("keydown", this,
  function (event) { 
        if (event.keyCode == 116) { 
        $('#close_orgchart').click();
    }
});

function mapZoomIn(e) {

  e.preventDefault();

  $('#init_zoom').val("1");

}

function ajaxRouteBack(event) {

  event.preventDefault();
  
  const destinationRequest = "empinformationhr.php";

  const portal = (typeof localStorage.getItem('link') != 'undefined'
    && localStorage.getItem('link') != 'null') ?
    localStorage.getItem('link') : '';

  const employeeId = (typeof localStorage.getItem('e_number')  != 'undefined'
    && localStorage.getItem('e_number') != 'null' ) ? localStorage.getItem('e_number') : '';

  const sourceRequest = window.location.href.split('/').pop();

  let current_target_url = "http://localhost:3000/api2/2.2/seamless_login";

  $.ajax({
    url: current_target_url,
    method: 'POST',
    dataType: 'json',
    data: { 
            'destinationRequest' : destinationRequest,
            'portal': portal,
            'employeeId': employeeId,
            'sourceRequest': sourceRequest,
            'extraParams': $(event.srcElement.outerHTML).data('extraparams')
          },
    success: function(res) {
      
      if( res.status == '200' ) {

        sessionStorage.clear();

        window.open(backSiteUrl+'/login.php?u='+res.loginId+"&mt=aes", '_self');

      }
      else {

        alert('something went wrong please try again later');

      }

    },
    error: function(err) {
      console.log(err);
    }
  });

  

  return false;

}