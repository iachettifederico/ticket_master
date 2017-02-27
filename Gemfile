source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


gem 'rails', '~> 5.0.1'
gem 'mysql2', '~> 0.4.5', '< 0.5'
gem 'puma', '~> 3.7.1'
gem 'sass-rails', '~> 5.0.6'
gem 'uglifier', '~> 3.0.4'
gem 'coffee-rails', '~> 4.2.1'

gem 'jquery-rails', "~> 4.2.2"
gem 'jquery-ui-rails', "~> 6.0.1"
gem 'turbolinks', '~> 5.0.1'
gem 'jbuilder', '~> 2.6.2'

group :development, :test do
  gem 'byebug', "~> 9.0.6", platform: :mri
  gem "rspec-rails", "~> 3.5.2"
end

group :development do
  gem 'web-console', '~> 3.4.0'
  gem 'listen', '~> 3.0.8'
  gem 'spring', "~> 2.0.1"
  gem 'spring-watcher-listen', '~> 2.0.1'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

gem "react_on_rails", "~> 6.6.0"
gem "bootstrap-sass", "~> 3.3.7"
gem "devise", "~> 4.2.0"

gem 'mini_racer', "~> 0.1.8", platforms: :ruby

gem "rabl", "~> 0.13.1"
gem "oj", "~> 2.18.1"
gem "mystique", "~> 0.5.6"
gem "awesome_print", "~> 1.7.0"
gem "workflow", "~> 1.2.0"
