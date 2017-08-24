# VertexAssetApi

## Deployment Guide for AMI


1. Install Ruby
    1. rbenv
        1. dependency  
            `sudo apt-get update`  
        
            Next, let’s install the dependencies required for rbenv and Ruby with apt-get:  

            `sudo apt-get install autoconf bison build-essential libssl-dev libyaml-dev libreadline6-dev zlib1g-dev libncurses5-dev libffi-dev libgdbm3 libgdbm-dev`
        2. rbenv install  
            `git clone https://github.com/rbenv/rbenv.git ~/.rbenv`  

            `echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc`  
            `echo 'eval "$(rbenv init -)"' >> ~/.bashrc`  

            `source ~/.bashrc`  

            `git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build`  

    2. Install Ruby  
        `rbenv install -l`  

        `rbenv install 2.3.0`  
        `rbenv global 2.3.0`  

    3. Check  
        `ruby -v`  

    4. Working with Gems  

        1. Install Bundler  
            `echo "gem: --no-document" > ~/.gemrc`  
            `gem install bundler`  

        2. Check Environment  
            `gem env home`  

2. Install Rails  
    1. Rails  
        `gem install rails`  
        `rbenv rehash`  

    2. Check  
        `rails -v`  

[Ruby & Rails Install](https://www.digitalocean.com/community/tutorials/how-to-install-ruby-on-rails-with-rbenv-on-ubuntu-16-04)  

3. PostgreSQL setup  
    1. Install PostgreSQL:  
        `sudo apt-get install postgresql libpq-dev`  
    2. Create a user and a database for the application:  
        `sudo -u postgres createuser vertex_asset`  
        `sudo -u postgres createdb vertex_asset_production --owner=vertex_asset`  
    3. Set Password  
        `sudo -u postgres psql -d template1 -c "ALTER USER vertex_asset WITH PASSWORD 'vertex_interact';"`  
    4. Set Password Envrioment Varaible  
        `echo 'export VERTEX_ASSET_DATABASE_PASSWORD="vertex_interact"' >> ~/.bashrc`  
        `source ~/.bashrc`  
    5. pg_hba.conf  
        `sudo vi /etc/postgresql/9.5/main/pg_hba.conf`        
        Change authenetication method of ’local’ from ‘peer’ to ‘mb5’  

        After change this file we should restart Postgres.  
        `sudo /etc/init.d/postgresql restart`  

    6. Grant Role  

        `sudo -u postrgres psql`  
        `REVOKE CONNECT ON DATABASE vertex_asset_production FROM PUBLIC;`  

        `ALTER USER vertex_asset WITH SUPERUSER;`  


4. Cloning from GitHub  
    1. Generate SSH key  
        `ssh-keygen && cat ~/.ssh/id_rsa.pub`  
        `ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDPn5spsj5J56UC8Wktui6fWeyHIUItvb/FqQlXjSYvDtqXhXJgiMYBpTtBNDs76WKN/dX3FBLHRPy7sz38scgrqBjeSqX5gRk4K0Vaq+hEL46FAn2dA9fCLmRMzjDRrGR7r0zxMomvwmFaQZytP3PzgcyS4PL5VyrrQpkvMWarFxhxnsSb1LppUMjpYSB2bM7BaMZV3oDC1mazBn2YFx+rbjGQPljQSa6ZyUVYXV97O5EIdJkA7AKAPTMK7I076doQpH54fr6VNz8bL6BNCBQWQgGe/k3/2QtoEZO50FDGSmkGk3ZwvSEletIfGXbW3qJSBmnGfaYB+Z9jkD6egDqb`  

    2. Test Connection  
        `ssh -T git@github.com`  

    3. Git clone  
        `git clone git@github.com:yaodev778/vertex_asset_api.git`  

5. Config for production  

    1. Setting RAILS_ENV variable  
        `echo 'export RAILS_ENV="production"' >> ~/.bashrc`  
        `echo $RAILS_ENV`  

    2. Secret Key  
				`rake secret`  
        `echo 'export SECRET_KEY_BASE="8763b534c88feb68347be4f4968f73d7ada68251d726735154f807630afbe8d751ad0a29bf912c45fede713aef07ab7ed74cef95881120666937ad9cb948af09"' >> ~/.bashrc`  
        `source ~/.bashrc`  

6. Bundle  
    1.  Poppler Install  

        1. required library  
            `sudo apt install g++ autoconf libfontconfig1-dev pkg-config libjpeg-dev libopenjpeg-dev gnome-common libglib2.0-dev gtk-doc-tools libyelp-dev yelp-tools gobject-introspection libsecret-1-dev libnautilus-extension-dev`  

        2. poppler  
            `sudo apt-get install poppler-utils`  
		2.  Bundle Install
    	`bundle install --without development:test`  

7. Database Migration  
    `rake db:migrate`  
    `rake db:seed`  

8. Start Server  
    `nohup rails s -b 0.0.0.0 -p 3001`  