function show_meme(){
    memes_array = ["2.jpg","4.jpg","9.jpg","All_git_hub_projects.jpg","average_day_in_it.gif","a_true_masterpeice.jpg","barbie (1).jpg","Biggest_brain.jpg","big_brain.jpeg","Bob_Nenadic_CV.jpg","Bob_Nenadic_Maths.jpg","bob_strikes_again.jpg","but_it_does_run.jpg","but_i_do_it_brilliantly.jpg","dissapointed_jake.jpg","disstraction.jpg","Everybody_Gets_an_idea.jpg","fixing_pearents_tech.jpg","Harold_Nenadic_Beach.jpg","How_To_Close_Tickets.jpeg","im_am_James_May.jpg","its_fun_in_an_ax.jpg","its_honeslty_a_mystry.jpg","it_was_a_good_idea.jpg","it_will_be_a_GPT.jpg","it_will_be_a_vim.jpg","i_am_tiny_brain.jpg","i_hate_spelling.jpg","Jake_Artist.jpg","lost_in_BU.jpg","me_irl.jpg","Me_irl_2.jpg","Me_Maths.jpg","Mr_Meme.jpg","no_differnece.jpg","POV_Me.jpg","QUICK_REVERSE_274.png","reply_all.jpg","Reports_Are_Done.jpg","SUV_owners.jpg","TheNumbers_they_are_the_same.png","the_four_stages_of_getting_it_to_work.jpg","TTDS_Maths.png","mac.jpg"]
    // select a meme
    image_path = memes_array[Math.floor(Math.random()*memes_array.length)]
    console.log(image_path)
    // change the background to a meme
    document.getElementById("the_meme").innerHTML = "<img class='center-fit' onclick='show_meme()' src='https://jakentech.github.io/memeperhour.github.io/assets/img/"+image_path+"'>";
}

// Run function once
show_meme()
//300000 milliseconds = 5 minutes
setInterval(show_meme,3600000)