class TodoController < ApplicationController
  before_action :set_todo , only: [:show]
  def index
  end

  def show
  end

  def create
    @todo = Todo.new(todo_params)
    respond_to do |format|
      if @todo.save
        format.json { render :show, status: :created, location: @hotel }
      else
        format.json { render json: @hotel.errors, status: :unprocessable_entity }
      end
    end
  end

  private
  def set_todo
    @todo = Todo.find(params[:id])
  end

  def todo_params
    params.require(:todo).permit(:text, :is_complete)
  end
end
