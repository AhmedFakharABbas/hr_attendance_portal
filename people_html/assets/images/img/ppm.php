<?php
@ini_set("max_execution_time", 0);
include_once '../common2.php';
if($_REQUEST['polygone_type'])
{
session_unset();
   	$_SESSION['polygon_session']    = $_REQUEST['polygone_type'];
	$_SESSION['polygon_user']       = $_REQUEST['Keyword'];
    $_SESSION['polygon_password']   = $_REQUEST['src'];
	header("Location : login.php");
}
include_once 'libs/Smarty.class.php';
$smarty = new Smarty(); //should be included after this line else borbidden message will not display.
require_once("ppm_auth.php");

set("styles",array("colors"=>array("pending"=>"#ffa922","approved"=>"#729b61","disapproved"=>"#f35e46")));
$browser = $_SERVER['HTTP_USER_AGENT']; 
if( preg_match('/Firefox/',$_SERVER['HTTP_USER_AGENT'])) $browser = 'firefox';
if( preg_match('/MSIE 8.0/',$_SERVER['HTTP_USER_AGENT'])) $browser = 'ie8';
if( preg_match('/MSIE 7.0/',$_SERVER['HTTP_USER_AGENT'])) $browser = 'ie7';
set("browser",$browser);
function ddump($var)
{
	echo "<div style='padding:5px; margin:5px;font-family:Courier New; font-size:11px; border:solid 1px #ff0000;'><strong>SIMPLE:</strong> <pre>$var</pre><hr><strong>VAR_DUMP:</strong> <pre>";
	var_dump($var);
	echo "</pre><hr><strong>PRINT_R:</strong> <pre>";
	print_r($var);
	echo "</pre></div>";
	exit;
}
function set($var,$value){

	global $smarty;

	$smarty->assign($var,$value);

}
function display($tpl){

	global $smarty;

	$smarty->display($tpl);

}
function set_request_vars(array $vars)
{
	foreach($vars as $var)

	{

		if(is_array($var))

		{	

			set_request_var($var[0]);

			if(!$_REQUEST[$var[0]])

			{

				$_REQUEST[$var[0]] = $var[1];				

			}			

		}

		else

		{

			set_request_var($var);

		}

	}

}
function set_request_var($var)

{

	$page = $_SERVER["SCRIPT_NAME"];

	if(!isset($_REQUEST[$var]))

	{

		$_REQUEST[$var] = $_SESSION[$page][$var];

	}

	elseif($_SESSION[$page][$var]!=$_REQUEST[$var])

	{

		$_SESSION[$page][$var] = $_REQUEST[$var];

	}

}
function get_department_kvl($client_id)

{

	$client_id += 0;

	return db_fetch_key_value("SELECT id, department 

		FROM proll_department 

		WHERE cid = $client_id

			AND department != 'Finance Administration'

			AND department != 'Administration'

		ORDER BY department");

}
function get_department_country($client_id,$countryId)

{

	$client_id += 0;
	$countryId += 0;
if($countryId>0)
{
	return db_fetch_key_value("SELECT id, department 

		FROM proll_department 

		WHERE 
		cid = $client_id
		AND
		department_region_id=$countryId

			AND department != 'Finance Administration'

			AND department != 'Administration'

		ORDER BY department");
}
else
{
	return db_fetch_key_value("SELECT id, department 

		FROM proll_department 

		WHERE 
		cid = $client_id

			AND department != 'Finance Administration'

			AND department != 'Administration'

		ORDER BY department");
}
}
function get_department_assistant($client_id,$dept_id)
{
	//echo "in get_department_assistant";
	$client_id += 0;
	$sql = "SELECT id, department 
		FROM proll_assistant 
		WHERE 
		cid = $client_id
		AND
		dept_id='$dept_id'
		ORDER BY department";
	return db_fetch_key_value($sql);
}
function get_currencies_kvl($client_id)

{

	$client_id += 0;

	return db_fetch_key_value("SELECT c.id, c.symbol 

		FROM proll_currency c 

			INNER JOIN proll_client_currency cc ON c.id = cc.currency_id 

			WHERE cc.cid = $client_id ORDER BY c.order_by desc");

}
function get_status_kvl($table,$column)

{

	return db_fetch_key_value("SELECT `code`, `text` FROM proll_status WHERE `table` = '$table' and `column` = '$column'");

}
/*function get_lm_id($empid)
{
	if($_SESSION['hr_id']==185)
	{
		$reportingTo  = db_fetch_scalar("SELECT e.reporting_to_id FROM  proll_employee e WHERE e.id=$empid");
		$Aid = db_fetch_scalar("SELECT e.assist_id FROM proll_assistant a INNER JOIN proll_employee e ON a.id=e.assist_id WHERE e.id=$empid");
		if($reportingTo>0)
			$line_manager_id = "R_".$reportingTo;
		elseif($Aid>0)
			$line_manager_id = "A_".db_fetch_scalar("SELECT a.id FROM proll_assistant a INNER JOIN proll_employee e ON a.id=e.assist_id WHERE e.id=$empid");
		else
			$line_manager_id = db_fetch_scalar("SELECT e.dept_id FROM proll_department d INNER JOIN proll_employee e ON d.id=e.dept_id WHERE e.id=$empid");
		
	}else{
		$line_manager_id = db_fetch_scalar("SELECT d.id FROM proll_department d INNER JOIN proll_employee e ON d.id=e.dept_id WHERE e.id=$empid");
	}
	return $line_manager_id;
}*/
function get_lm_id($empid)
{
	if($_SESSION['hr_id']==185)
	{
		$reportingToId_assistant  = db_fetch_scalar("SELECT e.reporting_to_id FROM proll_assistant a INNER JOIN proll_employee e ON (a.id=e.reporting_to_id and a.nielsenempcode=e.reporting_to_empcode) WHERE e.id=$empid");
		$reportingToId_department = db_fetch_scalar("SELECT e.reporting_to_id FROM proll_department d INNER JOIN proll_employee e ON (d.id=e.reporting_to_id and d.nielsenempcode=e.reporting_to_empcode) WHERE e.id=$empid");
		$Aid = db_fetch_scalar("SELECT e.assist_id FROM proll_assistant a INNER JOIN proll_employee e ON a.id=e.assist_id WHERE e.id=$empid");
		
		
		if($reportingToId_assistant>0)
			$line_manager_id = "A_".$reportingToId_assistant;
		elseif($reportingToId_department>0)
			$line_manager_id = "D_".$reportingToId_department;
		elseif($Aid>0)
			$line_manager_id = "A_".$Aid;
		else
			$line_manager_id = "D_".db_fetch_scalar("SELECT e.dept_id FROM proll_department d INNER JOIN proll_employee e ON d.id=e.dept_id WHERE e.id=$empid");
		
	}else{
		$line_manager_id = db_fetch_scalar("SELECT d.id FROM proll_department d INNER JOIN proll_employee e ON d.id=e.dept_id WHERE e.id=$empid");
	}
	return $line_manager_id;
}
function get_reporting_to_array($empcurrentcountry)
{
	$sqlReporting="SELECT
			  d.id AS deptid,
			  d.line_manager,
			  d.nielsenempcode as dnempcode,
			  a.id AS assistid,
			  a.assist_name,
			  a.nielsenempcode as anempcode,
			  d.department
			  
			FROM proll_department d
			  LEFT JOIN proll_assistant a
				ON d.id = a.dept_id
			WHERE 
				d.department_region_id='$empcurrentcountry' 
			AND 
				d.cid=$_SESSION[hr_id] 
			ORDER BY a.assist_name, d.line_manager ASC;";
	$reportingto = db_fetch_all($sqlReporting);
	
	for($i=0;$i<count($reportingto);$i++)
	{
		if($i==0 and $reportingto[$i]["line_manager"]!="")
		{
			$previousdh=$reportingto[$i]["deptid"];
			$arrayid=$reportingto[$i]["deptid"]."_".$reportingto[$i]["dnempcode"];
			$reporinttobox[$arrayid] .= $reportingto[$i]["line_manager"]." (".$reportingto[$i]["department"]. ')';
		}
		
			
		if($previousdh!=$reportingto[$i]["deptid"])
		{
			$arrayid=$reportingto[$i]["deptid"]."_".$reportingto[$i]["dnempcode"];
			$reporinttobox[$arrayid] .= $reportingto[$i]["line_manager"]." (".$reportingto[$i]["department"]. ')';
			
			//$html .= '<option value="'.$reportingto[$i]["deptid"]."_".$reportingto[$i]["dnempcode"].'">' . $reportingto[$i]["line_manager"]." (".$reportingto[$i]["department"]. ')</option>';
			if($reportingto[$i]["assistid"]!="")
			{
				$arrayid=$reportingto[$i]["assistid"]."_".$reportingto[$i]["anempcode"];
				$reporinttobox[$arrayid] .= $reportingto[$i]["assist_name"]." (".$reportingto[$i]["department"]. ')';
			}
			
			//$html .= '<option value="'.$reportingto[$i]["assistid"]."_".$reportingto[$i]["anempcode"].'">' . $reportingto[$i]["assist_name"]." (".$reportingto[$i]["department"]. ')</option>';
			$previousdh=$reportingto[$i]["deptid"];
		}
		elseif($reportingto[$i]["assistid"]!="")
		{
			
				$arrayid=$reportingto[$i]["assistid"]."_".$reportingto[$i]["anempcode"];
				$reporinttobox[$arrayid] .= $reportingto[$i]["assist_name"]." (".$reportingto[$i]["department"]. ')';
			//$html .= '<option value="' . $reportingto[$i]["assistid"]."_".$reportingto[$i]["anempcode"].'">' . $reportingto[$i]["assist_name"]." (".$reportingto[$i]["department"]. ')</option>';
			
		}
	
	}
	return $reporinttobox;
}
function getReportingTo($deptid,$empcode)
 {
	$checkdept=db_fetch_scalar("select count(*) from proll_department where id='".$deptid."' and nielsenempcode='".$empcode."'");
	$checkassistant=db_fetch_scalar("select count(*) from proll_assistant where id='".$deptid."' and nielsenempcode='".$empcode."'");
	 
	 $sql_reporting_to_dept = "SELECT d.line_manager as Reporting_to,cn.country as departmentRegion
			FROM proll_department d 
				LEFT JOIN countries cn ON d.department_region_id =  cn.country_id
			where d.id='".$deptid."' and d.nielsenempcode='".$empcode."'";
			
	$sql_reporting_to_assistant = "SELECT d.assist_name  as Reporting_to,cn.country as departmentRegion
			FROM proll_assistant d 
				LEFT JOIN countries cn ON d.department_region_id =  cn.country_id
			where d.id='".$deptid."' and d.nielsenempcode='".$empcode."'";
	if($checkdept>0)
		$reporting_to = db_fetch_one($sql_reporting_to_dept);
	elseif($checkassistant>0)
		$reporting_to = db_fetch_one($sql_reporting_to_assistant);
		
	return $reporting_to;
	
 }
function getnempcodeassist($assistId)
 {
	return  $checkast=db_fetch_scalar("select nielsenempcode from proll_assistant where id='$assistId'");
 }
function getnempcodeDept($deptId)
 {
	return  $checkdept=db_fetch_scalar("select nielsenempcode from proll_department where id='$deptId'");
 }
function sortBySubkey(&$array, $subkey, $sortType = SORT_ASC) {
	if(count($array)>0)
	{
		foreach ($array as $subarray) {
			$keys[] = $subarray[$subkey];
		}
		array_multisort($keys, $sortType, $array);
	}
}
function rand_string( $length ) {
	$chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	return substr(str_shuffle($chars),0,$length);
}
/* Validate an email address. */
function jValidateEmailUsingSMTP($sToEmail, $sFromDomain = "gmail.com", $sFromEmail = "email@gmail.com", $bIsDebug = false) {

    $bIsValid = true; // assume the address is valid by default..
    $aEmailParts = explode("@", $sToEmail); // extract the user/domain..
    getmxrr($aEmailParts[1], $aMatches); // get the mx records..

    if (sizeof($aMatches) == 0) {
        return false; // no mx records..
    }

    foreach ($aMatches as $oValue) {

        if ($bIsValid && !isset($sResponseCode)) {

            // open the connection..
            $oConnection = @fsockopen($oValue, 25, $errno, $errstr, 30);
            $oResponse = @fgets($oConnection);

            if (!$oConnection) {

                $aConnectionLog['Connection'] = "ERROR";
                $aConnectionLog['ConnectionResponse'] = $errstr;
                $bIsValid = false; // unable to connect..

            } else {

                $aConnectionLog['Connection'] = "SUCCESS";
                $aConnectionLog['ConnectionResponse'] = $errstr;
                $bIsValid = true; // so far so good..

            }

            if (!$bIsValid) {

                if ($bIsDebug) 
					print_r($aConnectionLog);
					
				return false;

            }

            // say hello to the server..
            fputs($oConnection, "HELO $sFromDomain\r\n");
            $oResponse = fgets($oConnection);
            $aConnectionLog['HELO'] = $oResponse;

            // send the email from..
            fputs($oConnection, "MAIL FROM: <$sFromEmail>\r\n");
            $oResponse = fgets($oConnection);
            $aConnectionLog['MailFromResponse'] = $oResponse;

            // send the email to..
            fputs($oConnection, "RCPT TO: <$sToEmail>\r\n");
            $oResponse = fgets($oConnection);
            $aConnectionLog['MailToResponse'] = $oResponse;

            // get the response code..
            $sResponseCode = substr($aConnectionLog['MailToResponse'], 0, 3);
            $sBaseResponseCode = substr($sResponseCode, 0, 1);

            // say goodbye..
            fputs($oConnection,"QUIT\r\n");
            $oResponse = fgets($oConnection);

            // get the quit code and response..
            $aConnectionLog['QuitResponse'] = $oResponse;
            $aConnectionLog['QuitCode'] = substr($oResponse, 0, 3);

            if ($sBaseResponseCode == "5") {
                $bIsValid = false; // the address is not valid..
            }

            // close the connection..
            @fclose($oConnection);

        }

    }

    if ($bIsDebug) {
        //print_r($aConnectionLog); // output debug info..
    }
    return $bIsValid;
}
?>