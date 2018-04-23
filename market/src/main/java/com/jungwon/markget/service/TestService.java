package com.jungwon.markget.service;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jungwon.markget.dao.TestDao;

@Service
public class TestService {
	
	@Autowired
	private TestDao dao;
	
	public List<Map<String,Object>> getList() throws SQLException
	{
		return dao.getList();
		
	}

}
