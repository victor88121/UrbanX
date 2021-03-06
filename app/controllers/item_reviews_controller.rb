class ItemReviewsController < ApplicationController
  def create
    if user_signed_in?

      # Refactored 
      context_params = {
        item_id: params[:item_id],
        item_review_params: item_review_params,
        owner_id: @current_user.id
      }

      result = CreateNewItemReview.call(context_params)
      if result.success?
        render json: result.item_review
      end


    #   print("inside of create item reviews")
    #   print(params)
    #   @item = Item.find(params[:item_id])
    #   @item_review = @item.item_reviews.create(item_review_params)
    #   @item_review.created_at = DateTime.now
    #   @item_review.updated_at = DateTime.now 
    #   #map the user who created the review for this item       
    #   @item_review.owner_id = @current_user.id
    #   if @item_review.save
    #     puts("saved successfully")
    #     #redirect_to item_path(@item)
    #     render :json => {"success" => true}.to_json()

    #   else
    #     render 'new'
    #   end
    # else
    #   redirect_to new_user_session_path
    # end
    end
  end

  def new
    @item = Item.find(params[:item_id])
    @item_review = @item.item_reviews.new
  end

  def index
    @item = Item.find(params[:item_id])
    @item_reviews = @item.item_reviews

    item_reviews_array = []
    @item_reviews.each_with_index do |item_review, index|
      owner = User.find(item_review[:owner_id])
      full_name = owner.user_profile[:first_name] + " " + owner.user_profile[:last_name]
      @user = UserProfile.where(user_id: item_review.owner_id).first
      owner_profile_id = @user.id

      item_review_hash = item_review.attributes
      item_review_hash[:owner] = full_name
      item_review_hash[:owner_profile_id] = owner_profile_id

      if @user.image.attached?
          item_review_hash[:image] = rails_blob_url(@user.image)
      end
      
      item_reviews_array.push(item_review_hash)
    end
    render :json => {"current_viewed_item_reviews" => item_reviews_array}.to_json()
  end
  
  def show
  end
  
  def update
    if user_signed_in?

      # Refactored 
      puts(params)
      context_params = {
        item_id: params[:item_id],
        item_review_params: item_review_params,
        item_review_id: params[:id]
      }

      result = EditItemReview.call(context_params)
      if result.success?
        render :json => {"success" => true}.to_json()      
      end

      # @item = Item.find(params[:item_id])
      # @item_review = @item.item_reviews.find(params[:id])
      # #check if current user is allowed to edit
      # if @item_review.owner_id == @current_user.id
      #   if @item_review.update(item_review_params)
      #     puts("saved")
      #     @item_review.updated_at = DateTime.now
      #     render :json => {"success" => true}.to_json()
      #   else
      #     puts("not saved")
      #     render 'edit'
      #   end
      # else
      #   render 'edit'
      # end
    else
      redirect_to new_user_session_path
    end
  end

  def edit
    if user_signed_in?
      @item = Item.find(params[:item_id])
      @item_review = @item.item_reviews.find(params[:id])
    else
      redirect_to new_user_session_path
    end
  end

  def destroy
    if user_signed_in?

      # Refactored 
      context_params = {
        item_id: params[:item_id],
        item_review_id: params[:id]
      }

      result = DeleteItemReview.call(context_params)
      if result.success?
        render :json => {"success" => true}.to_json()      
      end

      # @item = Item.find(params[:item_id])
      # @item_review = @item.item_reviews.find(params[:id])
      # @item_review.destroy
      # render :json => {"success" => true}.to_json()
    else
      redirect_to new_user_session_path
    end
  end

  private
  def item_review_params
      params.require(:item_review).permit(:rating, :comment)
  end
end
