"use strict"

$ ->
  console.log '%cinitializing modules...', 'color: green'

  page = $('html').data('page')

  Manifest.forEach (manifest) ->
    if manifest.pages.indexOf(page) != -1
      manifest.modules.forEach (module, index, modules) ->
        console.time "#{module} #{index+1}/#{modules.length}"
        try
          Modules[module].init()
        catch error
          console.log "%c#{module} #{index+1}/#{modules.length}: error", 'color: red'
          throw error

        console.timeEnd "#{module} #{index+1}/#{modules.length}"

  console.log '%call modules was successfully initialized!', 'color: green'