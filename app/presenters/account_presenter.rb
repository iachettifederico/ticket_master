class AccountPresenter < Mystique::Presenter
  def to_h
    {
     email: email,

    }
  end
end
