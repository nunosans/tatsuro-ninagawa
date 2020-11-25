# Activate and configure extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# activate :i18n
# activate :i18n, :mount_at_root => :en

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end
