import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class UserList {
	
	public Map getUserList() {
		Map<String,String> userList= new HashMap<String,String>();
		userList.put("Jagatdeep","Nuware");
		userList.put("Rajesh","Nuware");
		userList.put("123@gmail.com","Nuware");
		userList.put("456@gmail.com","Nuware");
		return userList;
	}
	
	public List getFreindList(String name) {
		List freindList = new ArrayList<String>();
		if(name.equals("Jagatdeep")) {
			freindList = getJagatdeepFreindList();
		} else if(name.equals("Rajesh")) {
			freindList = getRajeshFreindList();
		}
		
		return freindList;
	}
	
	public List getJagatdeepFreindList() {
		List list =  new ArrayList<String>();
		list.add("Rajesh");
		return list;
	}
	
	public List getRajeshFreindList() {
		List list =  new ArrayList<String>();
		list.add("Jagatdeep");
		return list;
	}
}
