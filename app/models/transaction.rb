# == Schema Information
#
# Table name: transactions
#
#  id          :bigint(8)        not null, primary key
#  expiry_date :datetime
#  item_name   :string
#  lend_date   :datetime
#  return_date :datetime
#  status      :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  borrower_id :integer
#  item_id     :integer
#  lender_id   :integer
#

class Transaction < ApplicationRecord
	validates :expiry_date, :item_name, :lend_date, :return_date, :status, :created_at, :updated_at, :borrower_id, :item_id, :lender_id, presence: true
	validates :status, inclusion: { in: ["pending", "lent", "completed"]}

	belongs_to :borrower, class_name: :User, foreign_key: :borrower_id
	belongs_to :lender, class_name: :User, foreign_key: :lender_id
	belongs_to :item
end
