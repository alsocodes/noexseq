invitations
-------------------
++ groom
sequelize-cli --name invitations --attributes bride_photo:string,bride_nick_name:string,bride_full_name:string,bride_parent:string,bride_address:string,groom_photo:string,groom_nick_name:string,groom_full_name:string,groom_parent:string,groom_address:string,marriage_date:date,marriage_start_time:string,marriage_end_time:string,marriage_location:string,marriage_address:string,reception_date:date,reception_start_time:string,reception_end_time:string,reception_location:string,reception_address:string,unduhmantu_date:date,unduhmantu_start_time:string,unduhmantu_end_time:string,unduhmantu_location:string,unduhmantu_address:string,theme_id:integer,gps_coordinates:string,package_id:integer,max_guests:integer,has_guest_book:boolean,max_photo:integer,max_video:integer,has_present:boolean,live_until:date,has_countdown:boolean,has_stories:boolean,has_quotes:boolean


--------------------------
packages
sequelize-cli model:generate --name packages --attributes name:string,price:double,has_coodinates:boolean,max_guests:integer,has_guest_book:boolean,max_photo:integer,max_video:integer,has_present:boolean,live_until:date,has_countdown:boolean,has_stories:boolean,has_quotes:boolean

-------------------------
themes
sequelize-cli model:generate --name themes --attributes name:string,path:string

guests
-----------------
sequelize-cli model:generate --name guests --attributes invitation_id:integer,name:string,alias:string,address:string,phone:string
