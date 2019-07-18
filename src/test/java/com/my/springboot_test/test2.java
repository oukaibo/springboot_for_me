package com.my.springboot_test;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;

public class test2 {

	public static void main(String[] args) throws ParseException {
		String json = "{\n" +
				"\t\"identity\":1,\n" +
				"\t\"movies\":[\"电影1\",\"电影2\"],\n" +
				"\t\"age\":29,\n" +
				"\t\"createDate\":{\n" +
				"\t\t\"data\":\"2011-06-22T13:32:22Z\",\n" +
				"\t\t\"type\":\"datetime\"\n" +
				"\t}\n" +
				"}";
		/*JsonConfig jsonconfig = new JsonConfig();
		jsonconfig.registerJsonValueProcessor(Date.class, new JsonDateValueProcessor());*/
		JSONObject jsonObject = JSONObject.fromObject(json);
		for (Object item:jsonObject.keySet()){
			try{
				JSONObject objects = JSONObject.fromObject(jsonObject.get(item));
				if(objects==null || objects.size()==0){
					continue;
				}
				for (Object item2 :objects.keySet() ){
					if(item2.equals("data")){
						try{
							JSONArray jsonArray = JSONArray.fromObject(objects.get(item2));
							List list = new ArrayList();
							for (Object item3:jsonArray){
								list.add(process(item3));
							}
							jsonObject.put(item,list);
						}catch (Exception e){
							jsonObject.put(item,process(objects.get(item2)));
						}
					}
				}
			}catch (Exception e){
				continue;
			}
		}
		System.out.println(jsonObject);

	}

	private static Object process(Object value) throws ParseException {
		DateFormat df = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
		Date  date = df.parse(value.toString());
		SimpleDateFormat df1 = new SimpleDateFormat ("EEE MMM dd HH:mm:ss Z yyyy", Locale.UK);
		Date date1 =  df1.parse(date.toString());
		DateFormat df2 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		return df2.format(date1);
	}

}
