package mypackage.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tbladmin_details")
public class Admin {
		
		@Id
		@GeneratedValue(strategy =GenerationType.IDENTITY )
		private int admin_id;
		private String user_name;
		private String password;
		public Admin() {
			super();
			// TODO Auto-generated constructor stub
		}
		public Admin(int admin_id, String user_name, String password) {
			super();
			this.admin_id = admin_id;
			this.user_name = user_name;
			this.password = password;
		}
		public int getAdmin_id() {
			return admin_id;
		}
		public void setAdmin_id(int admin_id) {
			this.admin_id = admin_id;
		}
		public String getUser_name() {
			return user_name;
		}
		public void setUser_name(String user_name) {
			this.user_name = user_name;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		} 
}
