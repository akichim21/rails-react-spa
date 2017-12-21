class TodosController < ApplicationController
  before_action :set_todo , only: [:show, :update]
  around_action :hypernova_render_support
  def index
    @todos = Todo.all
  end

  def show
  end

  def create
    @todo = Todo.new(todo_params)
    respond_to do |format|
      if @todo.save
        format.json { render :show, status: :created, location: @todo }
      else
        format.json { render json: @todo.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @todo.update(todo_params)
        format.json { render :show, status: :ok, location: @todo }
      else
        format.json { render json: @todo.errors, status: :unprocessable_entity }
      end
    end
  end

  private
  def set_todo
    @todo = Todo.find(params[:id])
  end

  def todo_params
    params.require(:todo).permit(:text, :is_completed)
  end
end
