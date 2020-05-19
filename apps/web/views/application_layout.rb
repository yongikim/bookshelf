module Web
  module Views
    class ApplicationLayout
      include Web::Layout

      def javascript
        path = Web::Application.configuration.root.join('webpack-assets.json')
        file = File.read(path)
        json = JSON.parse(file)
        raw %(<script src="#{json['main']['js']}"></script>)
      end
    end
  end
end
