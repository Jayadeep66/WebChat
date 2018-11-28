import java.io.*;
import java.util.List;
import java.util.Map;

import javax.servlet.*;
import javax.servlet.http.*;

public class LoginForm extends HttpServlet{
	// Method to handle POST method request.
   public void doPost(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {

      doGet(request, response);
   }
   
	public void doGet(HttpServletRequest request, HttpServletResponse response)
		      throws ServletException, IOException {
		      
	      // Set response content type
	      response.setContentType("text/html");

	      UserList user = new UserList();
	      Map<String,String> userList = user.getUserList();
	      
	      PrintWriter out = response.getWriter();
	      String title = "Using POST Method to Read Form Data";
	      String userName = request.getParameter("uname");
	      String password = request.getParameter("psw");
	      
	      if(userList.containsKey(userName) && userList.get(userName).equals(password)) {
	    	  List freindList = user.getFreindList(userName);
	    	  request.setAttribute("username", userName);
	    	  request.setAttribute("freindList", freindList);
	    	  request.getRequestDispatcher("/Chat.jsp").forward(request, response);
	      } else {
	    	  request.setAttribute("errorMessage", "<strong style=color:red;>The email or password you entered doesn't match our records. Please try again or reset your password. Please note that your password may be case sensitive.</strong>");
	    	  request.getRequestDispatcher("/login.jsp").forward(request, response);
	      }
	  }
}
