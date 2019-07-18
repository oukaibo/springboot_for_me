package com.my.springboot_test;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.List;

/**
 * @author youzo
 */
@RestController
public class controller {

    @RequestMapping("/hello1")
    public String hello1(Model m){
        m.addAttribute("why", "你是小学生吗？");
        return "hello";
    }
    @RequestMapping("/index")
    public ModelAndView index(Model model) {
		ModelAndView mv = new ModelAndView();
        jiekuandan js=new jiekuandan();
        js.setA("aaaaaaaaaaaaaaaa");
        js.setB("bbbbbbbbbbbbbbb");
        js.setC("cccc");
        js.setD("dddddddddd");
        js.setE("eeeeeeeeee");
		List<jiekuandan> aa=new ArrayList<jiekuandan>();
		aa.add(js);
		aa.add(js);

		mv.setViewName("hello");
		mv.addObject("aa",aa);
		return mv;
    }
    @RequestMapping("/loanBillPrint")
    public ModelAndView loanBillPrint(Model model) {
        ModelAndView mv = new ModelAndView();
        jiekuandan js=new jiekuandan();
        js.setA("aaaaaaaaaaaaaaaa");
        js.setB("bbbbbbbbbbbbbbb");
        js.setC("cccc");
        js.setD("dddddddddd");
        js.setE("eeeeeeeeee");
        List<jiekuandan> aa=new ArrayList<jiekuandan>();
        aa.add(js);
        aa.add(js);

        mv.setViewName("loanBillPrint");
        mv.addObject("aa",aa);
        return mv;
    }
}


