class TeacherController < ApplicationController

  def index


  end

  def show
    @teacher = Teacher.find_by)(id: params[:id])
     render :json => @teacher.as_json(include: {badges: {include: {votes: {only: [:points]}}, only:[:id, :description] } })
  end

end
