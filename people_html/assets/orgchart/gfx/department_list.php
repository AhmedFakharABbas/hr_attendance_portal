<?php
	include_once("ppm.php");
	require_once(SITE_ROOT.'/php/Paging.php');
	include_once("classes/ppm.reports.class.php");
	
	if($_POST["action"] == 'Credentials')
	{
		$excel = new ppmReports();
		$excel->getCredentials();
	}
	if($_POST and !$_REQUEST['txtcountry'])
	{
		$action = $_POST["action"];
		
		$ids = 0;
		if($_POST["ids"])
		{
			$ids = implode(",",$_POST["ids"]);
			$sqldept= "Delete from proll_department where id in ($ids)";
			$count=db_fetch_scalar("select count(id) from proll_assistant where dept_id in ($ids)");
			if($count>0)
			{
				$sqlast="Delete from proll_assistant where dept_id in ($ids)";
				if(db_execute($sqldept) and db_execute($sqlast))
					$optr=true;
				else
					$optr=false;
			}elseif(db_execute($sqldept))
				$optr=true;
				if($_POST["aids"])
				{
					$aids = implode(",",$_POST["aids"]);
					$sqlast="Delete from proll_assistant where id in ($aids);";
					if(db_execute($sqlast))
							$optr=true;
						else
							$optr=false;
				}
		}
		elseif($_POST["aids"])
		{
			$aids = implode(",",$_POST["aids"]);
			$sqlast="Delete from proll_assistant where id in ($aids);";
			if(db_execute($sqlast))
					$optr=true;
				else
					$optr=false;
		}
		
		if($optr)
		{
			set("message","Operation completed successfully.");
		}
		else
		{
			if($_POST["action"] != '')
			set("error","Operation failed. Please try again.");
		}
	}
	if($_REQUEST['txtcountry'] and $_SESSION[hr_account_type]==0)
		$checkregion="and department_region_id =".$_REQUEST['txtcountry'];
	elseif($_REQUEST['txtcountry'] and $_SESSION[region_id]>0 and $_SESSION[hr_account_type]==1)
		$checkregion="and department_region_id =".$_SESSION[region_id];
	elseif($_SESSION[region_id]>0 and $_SESSION[hr_account_type]==1)
		$checkregion="and department_region_id IN (".$_SESSION[region_id] . ")";
	
	//$sql = "Select * From proll_department WHERE cid = $_SESSION[hr_id] $checkregion  order by department DESC";
	
	$getdepts=db_fetch_all("select id from  proll_department where status = 1 and cid = $_SESSION[hr_id] $checkregion  order by department_region_id,department ASC");
	$departments=array();
	$limit = 10;
	$count = db_fetch_scalar("SELECT COUNT(id) FROM proll_department WHERE cid = $_SESSION[hr_id] AND status = 1");
	$pager = new Paging($count,$limit);	
	foreach($getdepts as $v)
	{
		$sql = "SELECT d.id,d.id as did,d.department,d.line_manager,d.email,d.CompWideStatus as CompWideStatus,c.country,d.dep_code,d.nielsenempcode FROM proll_department d LEFT JOIN countries c on d.department_region_id=c.country_id WHERE d.id=$v[id] LIMIT {$pager->get_offset()},$limit
				UNION ALL
				SELECT a.id,a.dept_id as did,a.department,a.assist_name as line_manager,a.email,a.dep_description as CompWideStatus,t.country,a.dep_code,a.nielsenempcode FROM proll_assistant a LEFT JOIN countries t on a.department_region_id =t.country_id WHERE a.dept_id=$v[id] LIMIT {$pager->get_offset()},$limit";
				
		$departments=array_merge($departments,db_fetch_all($sql));
	}
	/*
	else
	{
		$limit = 10;
		$count = db_fetch_scalar("SELECT COUNT(id) FROM proll_department WHERE cid = $_SESSION[hr_id] AND status = 1");
		$pager = new Paging($count,$limit);	
		$sql = "SELECT d.id,d.id as did,d.department,d.line_manager,d.email,d.nielsenempcode,d.dep_code,c.country FROM proll_department d LEFT JOIN countries c on d.department_region_id=c.country_id 		WHERE cid = $_SESSION[hr_id] AND status = 1 ORDER BY d.department LIMIT {$pager->get_offset()},$limit";
		
		$departments=	db_fetch_all($sql);
	}
	*/
	//ddump($departments);
	$total_country = db_execute("SELECT DISTINCT department_region_id FROM proll_department WHERE cid = $_SESSION[hr_id]");
	set("total_country",$total_country);  
	set("departments",$departments);   			   
	
	$sqlRegion = "SELECT  region_id,regionName  FROM region ORDER BY regionName ASC ";
	set("Region",db_fetch_key_value($sqlRegion));
	
	$sqlSubRegion = "SELECT  subRegionId, subRegionName FROM subregion WHERE regionid = '".$_REQUEST['txtRegion']."' ORDER BY subRegionName ASC ";
	set("SubRegion",db_fetch_key_value($sqlSubRegion));
	
	$sqlcountry = "SELECT 
				  country_id,country
				FROM
				  proll_region_country
				  INNER JOIN countries ON (proll_region_country.countryid = countries.country_id) where proll_region_country.subregionid='".$_REQUEST['txtSubregion']."' ORDER BY country ASC ";
	set("Country",db_fetch_key_value($sqlcountry));
	set('pager',$pager);
	set('company_mgmt_menu',1);
	display("department_list.html");
?>