class Api::MenuItemsController < ApplicationController
  def index
    render json: MenuItem.order(created_at: :DESC)
  end

  def create
    menu_item = MenuItem.new(menu_item_params)
    if menu_item.save
      render json: menu_item
    else
      binding.pry
    end
  end

  def destroy
    MenuItem.find(params[:id]).destroy
  end

  private

  def menu_item_params
    params.require(:menu_item).permit(:name, :description, :price)
  end

end
