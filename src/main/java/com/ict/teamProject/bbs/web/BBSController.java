package com.ict.teamProject.bbs.web;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.HttpSessionRequiredException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ict.teamProject.bbs.service.BBSDto;
import com.ict.teamProject.bbs.service.BBSService;
import com.ict.teamProject.bbs.service.BBSUsersProfileDto;
import com.ict.teamProject.command.FileUtils;
import com.ict.teamProject.files.service.FilesDto;


@Controller
@RequestMapping("/bbs")
@RestController
@CrossOrigin(origins = "http://localhost:3333")
public class BBSController {
	
	//서비스 주입
	@Autowired
	private BBSService<BBSDto> service;
	
	//입력처리]
	@PostMapping("/Write.do")
	@ResponseBody
	public int writeOk(//Authentication auth,
			@RequestParam Map map,@RequestParam(name="files", required=false) MultipartFile[] files, @RequestParam(name="ciu", required=false) String ciuJson) throws JsonMappingException, JsonProcessingException {
		
		//서비스 호출
		//스프링 씨큐리티 적용시 인증(로그인)되었다면 Authentication객체에 로그인에 관련된 정보가 전달됨
		//로그인이 안되어 있으면 auth는 null
		//System.out.println("[Authentication객체]");
		//System.out.println("auth"+auth);
		
		//UserDetails principal = (UserDetails)auth.getPrincipal();
		//System.out.println("아이디:"+principal.getUsername());
		//System.out.println("비밀번호:"+principal.getPassword());
		//System.out.println(principal.getUsername()+"의 권한들]");
		//Collection<GrantedAuthority> authorities = (Collection<GrantedAuthority>) principal.getAuthorities();
		//String authorties = authorities.stream().map(authority -> authority.toString()).collect(Collectors.joining(","));
		//System.out.println(authorties);
		//map.put("id", principal.getUsername());
		System.out.println(map.get("id"));
		System.out.println(map.get("content"));
		System.out.println(map.get("hashTag"));
		System.out.println(map.get("type"));
		System.out.println(map.get("disclosureYN"));
		int affected = 0;
	    
		map= service.insert(map);
		if (ciuJson != null) {
			 // ciuJson을 파싱하여 List<Map<String, String>> 형태로 변환
		    ObjectMapper objectMapper = new ObjectMapper();
		    JavaType type = objectMapper.getTypeFactory().constructCollectionType(List.class, Map.class);
		    List<Map<String, String>> ciu = objectMapper.readValue(ciuJson, type);
	
		    // ciu를 사용하여 필요한 처리 수행
		    for (Map<String, String> item : ciu) {
		        String url = item.get("url");
		        File file = new File(url);
		        String name = file.getName();
	    		map.put("urls", url);
	    		map.put("names", name);
		        System.out.println(name);
		        System.out.println(url);
		        affected += service.insertFile(map);

		    }
		}
		
	    String uploadDirectory = "E:/images/";  // 파일을 저장할 디렉토리
	    String uploadimages = "src/main/resources/static/images/";
	    if (files != null) {
		    try {
		        Path uploadPath = Paths.get(uploadDirectory);
		        Path uploadimagePath = Paths.get(uploadimages);
		        if (!Files.exists(uploadPath)) {
		            Files.createDirectories(uploadPath);// 디렉토리가 없으면 생성
		        }
		        if (!Files.exists(uploadimagePath)) {
		            Files.createDirectories(uploadimagePath);// 디렉토리가 없으면 생성
		        }
		        for (MultipartFile file : files) {
		            String filename = file.getOriginalFilename();
		            String newFilename = FileUtils.getNewFileName(uploadDirectory, filename);
		            Path filePath = uploadPath.resolve(newFilename);  // 파일이 저장될 경로
		            Path fileimgaePath = uploadimagePath.resolve(newFilename);  // 파일이 저장될 경로
		            String filePathStr = filePath.toString().replace("\\", "/");  // 역슬래시를 슬래시로 바꾸기
		            
		            String baseUrl = "http://localhost:4000";  // 기본 URL
		            String imagePath = filePathStr.substring(filePathStr.indexOf("/images"));
		            imagePath = filePathStr.replace("E:/images", "/images");
		            
		    		map.put("urls", baseUrl+imagePath);
		    		map.put("names", newFilename);
		    	    System.out.println(map.get("urls"));
		    	    System.out.println(map.get("names"));
		            file.transferTo(filePath);  // 파일 저장
		            file.transferTo(fileimgaePath);  // 파일 저장
		            System.out.println("fileimgaePath:---"+fileimgaePath);
		            affected += service.insertFile(map);
		        }
		    } catch (IOException e) {
		        e.printStackTrace();
		        return 0;
		    }
	    }
		if(affected==0) {//입력 실패
			return affected;
		}
		return affected;
	}/////
	

	@RequestMapping(value="/ViewOne.do",method = {RequestMethod.GET,RequestMethod.POST})
	@ResponseBody
	public BBSDto viewOne(@RequestParam String bno) {
		int bnoInt = Integer.parseInt(bno);
		System.out.println("상세보기의 NO:"+bnoInt);
		//서비스 호출
		BBSDto record= service.selectOne(bnoInt);
		//줄바꿈
		record.setContent(record.getContent().replace("\r\n", "<br/>"));
		//뷰정보 반환
		return record;
	}
	
	@GetMapping("/ViewMy.do")
	@ResponseBody
	public List<BBSDto> viewMy(@RequestParam String id) {
		System.out.println("ID:"+id);
		//서비스 호출
		List<BBSDto> records= service.selectMy(id);
		//줄바꿈
	    for (BBSDto record : records) {
	        int bno = record.getBno();
	        record.setContent(record.getContent().replace("\r\n", "<br/>"));
	        List<String> files = service.selectFiles(bno);
	        record.setFiles(files);  // 게시글에 파일들을 추가
	        System.out.println("files:"+record.getFiles());
	    }
		return records;
	}
	
	//게시물 전체 뿌려주기
	@GetMapping("/List.do")
	public List view(@RequestParam Map map) {
	    //서비스 호출    
	    List<BBSDto> records = service.selectAll();
	    System.out.println("records:"+records);
	    for (BBSDto record : records) {
	        int bno = record.getBno();
	        System.out.println("bno:"+bno);
	        List<String> files = service.selectFiles(bno);
	        record.setFiles(files);  // 게시글에 파일들을 추가
	        record.setContent(record.getContent().replace("\r\n", "<br/>"));
	        System.out.println("files:"+record.getFiles());
	    }
		return records;
	}
	
	//수정하기
	@PostMapping("/Edit.do")
	public int edit(@RequestBody Map<String, Object> map) {
		int affected=0;
		BBSDto record = null;
		System.out.println("데이타 넘어오냐??"+map);
        int bno = Integer.parseInt(map.get("bno").toString());
        System.out.println("글번호~~~:"+bno);
        // 기존 레코드
        record = service.selectOne(bno);
        System.out.println("record.getDisclosureYN():"+record.getDisclosureYN());
        System.out.println("record.getHashTag():"+record.getHashTag());
        System.out.println("record.getContent():"+record.getContent());
	    // map에 있는 값만 변경.
        
        if (map.get("content") != null && !map.get("content").toString().isEmpty()) {
            record.setContent(map.get("content").toString());
            System.out.println("getContent()::"+record.getContent());
        }
        if (map.get("disclosureYN") != null && !map.get("disclosureYN").toString().isEmpty()) {
            record.setDisclosureYN(map.get("disclosureYN").toString().charAt(0));
            System.out.println("getDisclosureYN()::"+record.getDisclosureYN());
        }
        if (map.get("hashTag") != null && !map.get("hashTag").toString().isEmpty()) {
            record.setHashTag(map.get("hashTag").toString());
            System.out.println("getHashTag()::"+record.getHashTag());
        }

        if(record.getHashTag() == null) record.setHashTag("");
        if(record.getContent() == null) record.setContent("");
	    System.out.println("=============수정 후?=======");
        System.out.println("record.getDisclosureYN():"+record.getDisclosureYN());
        System.out.println("record.getHashTag():"+record.getHashTag());
        System.out.println("record.getContent():"+record.getContent());
	    // 변경된 레코드를 업데이트.
	    affected = service.update(record);				
	    return affected;
	}/////
	
	//삭제하기
	@GetMapping("/{bno}/Delete.do")
	public ResponseEntity delete(@PathVariable String bno) {
		try {
	        int bnoInt = Integer.parseInt(bno);
	        int affected = 0;
	        List<String> files = service.selectFiles(bnoInt);
	        
	        String baseDirectory = "E:/images/";
	        String imageDirectory = "src/main/resources/static/images/";
	        
	        // files에 값이 있으면 해당 파일들을 삭제
	        if (files != null && !files.isEmpty()) {
	            for (String fileUrl : files) {
	                String fileName = fileUrl.substring(fileUrl.lastIndexOf("/") + 1);
	                Path filePath = Paths.get(baseDirectory + fileName);
	                Path imagePath = Paths.get(imageDirectory + fileName);
	                try {
	                    Files.deleteIfExists(filePath);
	                    Files.deleteIfExists(imagePath);
	                } catch (IOException e) {
	                    e.printStackTrace();
	                }
	            }
	        }
	        System.out.println("bnoInt:"+bnoInt);
	        service.deleteFiles(bnoInt);
	        affected += service.deleteBBS(bnoInt);
	        System.out.println("affected2:"+affected);
	        return ResponseEntity.ok(String.valueOf(affected));
	    } catch (NumberFormatException e) {
	        return ResponseEntity.badRequest().body("bno: " + bno);
	    }
	}
	
	@PostMapping("/userProfile")
	public List<BBSUsersProfileDto> getAllUsersById(@RequestBody Map<String,List<String>> map){
		System.out.println("값이 요청됨:"+map.get("ids"));
		List<BBSUsersProfileDto> dtos = new ArrayList<BBSUsersProfileDto>();
		int flag = 0;
		Map<String, String> param = new HashMap<>();
		for (String id : map.get("ids")) {
			if (flag==0) {
				param.put("userId", id);
			}
			else {
				param.put("otherId", id);
				BBSUsersProfileDto tempDto = new BBSUsersProfileDto().builder()
										.id(id)
										.isFriend(service.findIsFriend(param))
										.isSubTo(service.findIsSubto(param))
										.profilePath(service.findProfilePathById(id))
										.build();
				dtos.add(tempDto);
			}
			flag++;
		}
		return dtos;
	}
}
