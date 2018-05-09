class BeingsController < AppController

  get '/beings' do
    @users = User.all

    erb :'beings/index' 
  end

  get '/beings/new' do
    if logged_in?
      erb :'beings/new'
    else
      redirect '/users/login'
    end
  end

  post '/beings/new' do
    being = Being.new
    being.name = params[:name] == "" ? "Unknown" : params[:name] 
    being.age = params[:age].to_i == 0 ? "Unknown" : params[:age]
    being.species = params[:species] == "" ? "Unknown" : params[:species]

    head_part = Part.new(
      category: "head", 
      model: params[:head_model], 
      color: params[:head_color], 
      brightness: params[:head_brightness]
    ) 

    being.parts << head_part

    body_part = Part.new(
      category: "body",
      model: params[:body_model], 
      color: params[:body_color], 
      brightness: params[:body_brightness]
    )

    being.parts << body_part
    
    eyes_part = Part.new(
      category: "eyes",
      model: params[:eyes_model], 
      color: params[:eyes_color], 
      brightness: params[:eyes_brightness]
    )

    being.parts << eyes_part

    being.save

    current_user.beings << being

    redirect '/users/index'
  end

  get '/beings/:id/edit' do
    @being = Being.find(params[:id])

    erb :'/beings/edit' 
  end

  patch '/beings/:id/edit' do
    being = Being.find(params[:id])
    being.name = params[:name] == "" ? "Unknown" : params[:name] 
    being.age = params[:age].to_i == 0 ? "Unknown" : params[:age]
    being.species = params[:species] == "" ? "Unknown" : params[:species]

    being.parts[0].model = params[:head_model]
    being.parts[0].color = params[:head_color]
    being.parts[0].brightness = params[:head_brightness]
    being.parts[0].save

    being.parts[1].model = params[:body_model]
    being.parts[1].color = params[:body_color]
    being.parts[1].brightness = params[:body_brightness]
    being.parts[1].save

    being.parts[2].model = params[:eyes_model]
    being.parts[2].color = params[:eyes_color]
    being.parts[2].brightness = params[:eyes_brightness]
    being.parts[2].save

    being.save

    redirect '/users/index'
  end

  delete '/beings/:id/delete' do
    being = Being.find(params[:id])
    being.destroy

    redirect '/users/index'
  end

end
