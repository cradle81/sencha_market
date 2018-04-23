package com.jungwon.markget.controller;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jungwon.markget.service.TestService;

@RestController
public class TestController {
	
	@Autowired
	private TestService service;
	
	@RequestMapping(value="/test")
	public Map<String, Object> test()
	{
		Map<String,Object> result = new HashMap<String,Object>();
		result.put("name", "김정원");
		result.put("age",38);
		
		
		return result;
	}

	@RequestMapping(value="/getList")
	public Map<String, Object> getList()
	{
		Map<String,Object> result = new HashMap<String,Object>();
		List<Map<String, Object>> list=null;
		try {
			list = service.getList();
			
			result.put("data",list);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return result;
	}
}
