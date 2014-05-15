#coding:utf-8
module ApplicationHelper

  def line_break_to_br1(user, comment)
      han_kana =  %w{ｱ ｲ ｳ ｴ ｵ ｶ ｷ ｸ ｹ ｺ ｻ ｼ ｽ ｾ ｿ ﾀ ﾁ ﾂ ﾃ ﾄ ﾅ ﾆ ﾇ ﾈ ﾉ}
      han_kana += %w{ﾊ ﾋ ﾌ ﾍ ﾎ ﾏ ﾐ ﾑ ﾒ ﾓ ﾔ ﾕ ﾖ ﾗ ﾘ ﾙ ﾚ ﾛ ﾜ ｦ ﾝ}
      han_kana += %w{ｧ ｨ ｩ ｪ ｫ ｬ ｭ ｮ ｯ ﾞ ﾟ ､ ｡ ｰ ｢ ｣}

  # テキスト中の半角カナ・英数字・記号をすべてスキャンし要素数を返す。
  # 正規表現/!-~/で、半角英数字・記号を一括指定する。
  # 空白文字については半角スペースのみを含める。
  
    n = user.scan(/[#{han_kana.join}!-~ ]/).length
    l = user.length - n
    i = j = 0
    if l == 0
      i += 3
    elsif n>=1 && l>=1
      i += 1
    end
    
    
    str = "<br />&emsp;│"
    
    if 0<n && n<=3
      str << "&nbsp;"
    end
    
    while i < n
      str << "&ensp;"
      i += 1
    end
    
    while j < l-1
      str << "&emsp;"
      j += 1
    end

    h(comment).gsub(/(\r\n?)|(\n)/, str).html_safe
  end
  
  def line_break_to_br2(user, comment)
      han_kana =  %w{ｱ ｲ ｳ ｴ ｵ ｶ ｷ ｸ ｹ ｺ ｻ ｼ ｽ ｾ ｿ ﾀ ﾁ ﾂ ﾃ ﾄ ﾅ ﾆ ﾇ ﾈ ﾉ}
      han_kana += %w{ﾊ ﾋ ﾌ ﾍ ﾎ ﾏ ﾐ ﾑ ﾒ ﾓ ﾔ ﾕ ﾖ ﾗ ﾘ ﾙ ﾚ ﾛ ﾜ ｦ ﾝ}
      han_kana += %w{ｧ ｨ ｩ ｪ ｫ ｬ ｭ ｮ ｯ ﾞ ﾟ ､ ｡ ｰ ｢ ｣}

  # テキスト中の半角カナ・英数字・記号をすべてスキャンし要素数を返す。
  # 正規表現/!-~/で、半角英数字・記号を一括指定する。
  # 空白文字については半角スペースのみを含める。
  
    n = user.scan(/[#{han_kana.join}!-~ ]/).length
    l = user.length - n
    i = j = 0
    if l == 0
      i += 2
    end
    
    str = "<br />&emsp;│&emsp;│"
    
    if n == 0 || n >= 1 && l >= 1
      str << "&nbsp;"
    end
    
    while i < n
      str << "&ensp;"
      i += 1
    end
    
    while j < l-1
      str << "&emsp;"
      j += 1
    end

    h(comment).gsub(/(\r\n?)|(\n)/, str).html_safe
  end
  
  def line_break_to_br3(user, comment)
      han_kana =  %w{ｱ ｲ ｳ ｴ ｵ ｶ ｷ ｸ ｹ ｺ ｻ ｼ ｽ ｾ ｿ ﾀ ﾁ ﾂ ﾃ ﾄ ﾅ ﾆ ﾇ ﾈ ﾉ}
      han_kana += %w{ﾊ ﾋ ﾌ ﾍ ﾎ ﾏ ﾐ ﾑ ﾒ ﾓ ﾔ ﾕ ﾖ ﾗ ﾘ ﾙ ﾚ ﾛ ﾜ ｦ ﾝ}
      han_kana += %w{ｧ ｨ ｩ ｪ ｫ ｬ ｭ ｮ ｯ ﾞ ﾟ ､ ｡ ｰ ｢ ｣}

  # テキスト中の半角カナ・英数字・記号をすべてスキャンし要素数を返す。
  # 正規表現/!-~/で、半角英数字・記号を一括指定する。
  # 空白文字については半角スペースのみを含める。
  
    n = user.scan(/[#{han_kana.join}!-~ ]/).length
    l = user.length - n
    i = j = 0
    if l == 0
      i += 2
    end
    
    str = "<br />&emsp;│&emsp;│&emsp;│"
    
    if n == 0 || n >= 1 && l >= 1
      str << "&nbsp;"
    end
    
    while i < n
      str << "&ensp;"
      i += 1
    end
    
    while j < l-1
      str << "&emsp;"
      j += 1
    end

    h(comment).gsub(/(\r\n?)|(\n)/, str).html_safe
  end
  
  def line_break_to_br4(user, comment)
      han_kana =  %w{ｱ ｲ ｳ ｴ ｵ ｶ ｷ ｸ ｹ ｺ ｻ ｼ ｽ ｾ ｿ ﾀ ﾁ ﾂ ﾃ ﾄ ﾅ ﾆ ﾇ ﾈ ﾉ}
      han_kana += %w{ﾊ ﾋ ﾌ ﾍ ﾎ ﾏ ﾐ ﾑ ﾒ ﾓ ﾔ ﾕ ﾖ ﾗ ﾘ ﾙ ﾚ ﾛ ﾜ ｦ ﾝ}
      han_kana += %w{ｧ ｨ ｩ ｪ ｫ ｬ ｭ ｮ ｯ ﾞ ﾟ ､ ｡ ｰ ｢ ｣}

  # テキスト中の半角カナ・英数字・記号をすべてスキャンし要素数を返す。
  # 正規表現/!-~/で、半角英数字・記号を一括指定する。
  # 空白文字については半角スペースのみを含める。
  
    n = user.scan(/[#{han_kana.join}!-~ ]/).length
    l = user.length - n
    i = j = 0
    if l == 0
      i += 2
    end
    
    str = "<br />&emsp;│&emsp;│&emsp;│&emsp;│"
    
    if n == 0 || n >= 1 && l >= 1
      str << "&nbsp;"
    end
    
    while i < n
      str << "&ensp;"
      i += 1
    end
    
    while j < l-1
      str << "&emsp;"
      j += 1
    end

    h(comment).gsub(/(\r\n?)|(\n)/, str).html_safe
  end
  
  def line_break_to_br5(user, comment)
      han_kana =  %w{ｱ ｲ ｳ ｴ ｵ ｶ ｷ ｸ ｹ ｺ ｻ ｼ ｽ ｾ ｿ ﾀ ﾁ ﾂ ﾃ ﾄ ﾅ ﾆ ﾇ ﾈ ﾉ}
      han_kana += %w{ﾊ ﾋ ﾌ ﾍ ﾎ ﾏ ﾐ ﾑ ﾒ ﾓ ﾔ ﾕ ﾖ ﾗ ﾘ ﾙ ﾚ ﾛ ﾜ ｦ ﾝ}
      han_kana += %w{ｧ ｨ ｩ ｪ ｫ ｬ ｭ ｮ ｯ ﾞ ﾟ ､ ｡ ｰ ｢ ｣}

  # テキスト中の半角カナ・英数字・記号をすべてスキャンし要素数を返す。
  # 正規表現/!-~/で、半角英数字・記号を一括指定する。
  # 空白文字については半角スペースのみを含める。
  
    n = user.scan(/[#{han_kana.join}!-~ ]/).length
    l = user.length - n
    i = j = 0
    if l == 0
      i += 2
    end
    
    str = "<br />&emsp;│&emsp;│&emsp;│&emsp;│&emsp;│"
    
    if n == 0 || n >= 1 && l >= 1
      str << "&nbsp;"
    end
    
    while i < n
      str << "&ensp;"
      i += 1
    end
    
    while j < l-1
      str << "&emsp;"
      j += 1
    end

    h(comment).gsub(/(\r\n?)|(\n)/, str).html_safe
  end
  
  def line_break_to_br6(user, comment)
      han_kana =  %w{ｱ ｲ ｳ ｴ ｵ ｶ ｷ ｸ ｹ ｺ ｻ ｼ ｽ ｾ ｿ ﾀ ﾁ ﾂ ﾃ ﾄ ﾅ ﾆ ﾇ ﾈ ﾉ}
      han_kana += %w{ﾊ ﾋ ﾌ ﾍ ﾎ ﾏ ﾐ ﾑ ﾒ ﾓ ﾔ ﾕ ﾖ ﾗ ﾘ ﾙ ﾚ ﾛ ﾜ ｦ ﾝ}
      han_kana += %w{ｧ ｨ ｩ ｪ ｫ ｬ ｭ ｮ ｯ ﾞ ﾟ ､ ｡ ｰ ｢ ｣}

  # テキスト中の半角カナ・英数字・記号をすべてスキャンし要素数を返す。
  # 正規表現/!-~/で、半角英数字・記号を一括指定する。
  # 空白文字については半角スペースのみを含める。
  
    n = user.scan(/[#{han_kana.join}!-~ ]/).length
    l = user.length - n
    i = j = 0
    if l == 0
      i += 2
    end
    
    str = "<br />&emsp;│&emsp;│&emsp;│&emsp;│&emsp;│&emsp;│"
    
    if n == 0 || n >= 1 && l >= 1
      str << "&nbsp;"
    end
    
    while i < n
      str << "&ensp;"
      i += 1
    end
    
    while j < l-1
      str << "&emsp;"
      j += 1
    end

    h(comment).gsub(/(\r\n?)|(\n)/, str).html_safe
  end
  
  def line_break_to_br7(user, comment)
      han_kana =  %w{ｱ ｲ ｳ ｴ ｵ ｶ ｷ ｸ ｹ ｺ ｻ ｼ ｽ ｾ ｿ ﾀ ﾁ ﾂ ﾃ ﾄ ﾅ ﾆ ﾇ ﾈ ﾉ}
      han_kana += %w{ﾊ ﾋ ﾌ ﾍ ﾎ ﾏ ﾐ ﾑ ﾒ ﾓ ﾔ ﾕ ﾖ ﾗ ﾘ ﾙ ﾚ ﾛ ﾜ ｦ ﾝ}
      han_kana += %w{ｧ ｨ ｩ ｪ ｫ ｬ ｭ ｮ ｯ ﾞ ﾟ ､ ｡ ｰ ｢ ｣}

  # テキスト中の半角カナ・英数字・記号をすべてスキャンし要素数を返す。
  # 正規表現/!-~/で、半角英数字・記号を一括指定する。
  # 空白文字については半角スペースのみを含める。
  
    n = user.scan(/[#{han_kana.join}!-~ ]/).length
    l = user.length - n
    i = j = 0
    if l == 0
      i += 2
    end
    
    str = "<br />&emsp;│&emsp;│&emsp;│&emsp;│&emsp;│&emsp;│&emsp;│"
    
    if n == 0 || n >= 1 && l >= 1
      str << "&nbsp;"
    end
    
    while i < n
      str << "&ensp;"
      i += 1
    end
    
    while j < l-1
      str << "&emsp;"
      j += 1
    end

    h(comment).gsub(/(\r\n?)|(\n)/, str).html_safe
  end
  
  def line_break_to_br8(user, comment)
      han_kana =  %w{ｱ ｲ ｳ ｴ ｵ ｶ ｷ ｸ ｹ ｺ ｻ ｼ ｽ ｾ ｿ ﾀ ﾁ ﾂ ﾃ ﾄ ﾅ ﾆ ﾇ ﾈ ﾉ}
      han_kana += %w{ﾊ ﾋ ﾌ ﾍ ﾎ ﾏ ﾐ ﾑ ﾒ ﾓ ﾔ ﾕ ﾖ ﾗ ﾘ ﾙ ﾚ ﾛ ﾜ ｦ ﾝ}
      han_kana += %w{ｧ ｨ ｩ ｪ ｫ ｬ ｭ ｮ ｯ ﾞ ﾟ ､ ｡ ｰ ｢ ｣}

  # テキスト中の半角カナ・英数字・記号をすべてスキャンし要素数を返す。
  # 正規表現/!-~/で、半角英数字・記号を一括指定する。
  # 空白文字については半角スペースのみを含める。
  
    n = user.scan(/[#{han_kana.join}!-~ ]/).length
    l = user.length - n
    i = j = 0
    if l == 0
      i += 2
    end
    
    str = "<br />&emsp;│&emsp;│&emsp;│&emsp;│&emsp;│&emsp;│&emsp;│&emsp;│"
    
    if n == 0 || n >= 1 && l >= 1
      str << "&nbsp;"
    end
    
    while i < n
      str << "&ensp;"
      i += 1
    end
    
    while j < l-1
      str << "&emsp;"
      j += 1
    end

    h(comment).gsub(/(\r\n?)|(\n)/, str).html_safe
  end
  
  def line_break_to_br9(user, comment)
      han_kana =  %w{ｱ ｲ ｳ ｴ ｵ ｶ ｷ ｸ ｹ ｺ ｻ ｼ ｽ ｾ ｿ ﾀ ﾁ ﾂ ﾃ ﾄ ﾅ ﾆ ﾇ ﾈ ﾉ}
      han_kana += %w{ﾊ ﾋ ﾌ ﾍ ﾎ ﾏ ﾐ ﾑ ﾒ ﾓ ﾔ ﾕ ﾖ ﾗ ﾘ ﾙ ﾚ ﾛ ﾜ ｦ ﾝ}
      han_kana += %w{ｧ ｨ ｩ ｪ ｫ ｬ ｭ ｮ ｯ ﾞ ﾟ ､ ｡ ｰ ｢ ｣}

  # テキスト中の半角カナ・英数字・記号をすべてスキャンし要素数を返す。
  # 正規表現/!-~/で、半角英数字・記号を一括指定する。
  # 空白文字については半角スペースのみを含める。
  
    n = user.scan(/[#{han_kana.join}!-~ ]/).length
    l = user.length - n
    i = j = 0
    if l == 0
      i += 2
    end
    
    str = "<br />&emsp;│&emsp;│&emsp;│&emsp;│&emsp;│&emsp;│&emsp;│&emsp;│&emsp;│"
    
    if n == 0 || n >= 1 && l >= 1
      str << "&nbsp;"
    end
    
    while i < n
      str << "&ensp;"
      i += 1
    end
    
    while j < l-1
      str << "&emsp;"
      j += 1
    end

    h(comment).gsub(/(\r\n?)|(\n)/, str).html_safe
  end
  
  def line_break_to_br10(user, comment)
      han_kana =  %w{ｱ ｲ ｳ ｴ ｵ ｶ ｷ ｸ ｹ ｺ ｻ ｼ ｽ ｾ ｿ ﾀ ﾁ ﾂ ﾃ ﾄ ﾅ ﾆ ﾇ ﾈ ﾉ}
      han_kana += %w{ﾊ ﾋ ﾌ ﾍ ﾎ ﾏ ﾐ ﾑ ﾒ ﾓ ﾔ ﾕ ﾖ ﾗ ﾘ ﾙ ﾚ ﾛ ﾜ ｦ ﾝ}
      han_kana += %w{ｧ ｨ ｩ ｪ ｫ ｬ ｭ ｮ ｯ ﾞ ﾟ ､ ｡ ｰ ｢ ｣}

  # テキスト中の半角カナ・英数字・記号をすべてスキャンし要素数を返す。
  # 正規表現/!-~/で、半角英数字・記号を一括指定する。
  # 空白文字については半角スペースのみを含める。
  
    n = user.scan(/[#{han_kana.join}!-~ ]/).length
    l = user.length - n
    i = j = 0
    if l == 0
      i += 2
    end
    
    str = "<br />&emsp;│&emsp;│&emsp;│&emsp;│&emsp;│&emsp;│&emsp;│&emsp;│&emsp;│&emsp;│"
    
    if n == 0 || n >= 1 && l >= 1
      str << "&nbsp;"
    end
    
    while i < n
      str << "&ensp;"
      i += 1
    end
    
    while j < l-1
      str << "&emsp;"
      j += 1
    end

    h(comment).gsub(/(\r\n?)|(\n)/, str).html_safe
  end

end
