use anchor_lang::prelude::*;
pub mod constant;
pub mod states;

use crate::{constant::* , states::*};

declare_id!("9nkxvUwAiDKAus88nosvDnae6ZTiU419uAGfpNnUg6GE");

const USER_NAME_LENGTH : usize = 100;
const USER_URL_LENGTH : usize = 225;
const USER_DESCRIPTION_LENGTH : usize = 225;
const USER_STATUS_LENGTH : usize = 225;

const VIDEO_URL_LENGTH : usize = 225;
const VIDEO_DESCRIPTION_LENGTH : usize = 225;


#[program] 
pub mod yoo {
    
    use super::*;

    pub fn initialize_user(
        ctx : Context<InitializeUser>,
        name : String,
        age : String,
        gender : String,
        profile_url : String,
        description : String,
        country : String,
    ) -> Result<()> {
        let user_profile = &mut ctx.accounts.user_profile;
        user_profile.authority = ctx.accounts.authority.key();
        user_profile.wallet_address = ctx.accounts.authority.key();
        user_profile.name = name;
        user_profile.age = age;
        user_profile.gender = gender;
        user_profile.total_friend = 0;
        user_profile.status_index = 0;
        user_profile.status_count = 0;
        user_profile.video_index = 0;
        user_profile.init_time = ctx.accounts.clock.unix_timestamp;
        user_profile.profile_url = profile_url;
        user_profile.country = country;
        user_profile.description = description;

        Ok(())
    }

    pub fn add_friend(
        ctx : Context<AddFriend>,
        name : String,
        age : String,
        gender : String,
        profile_url : String,
        description : String, 
        country : String,
    ) -> Result<()> {
        let add_friend = &mut ctx.accounts.add_friend;
        let user_profile = &mut ctx.accounts.user_profile;
        
        add_friend.authority = ctx.accounts.authority.key();
        add_friend.name = name;
        add_friend.age = age;
        add_friend.gender = gender;
        add_friend.index = user_profile.total_friend;
        add_friend.profile_url = profile_url;
        add_friend.description = description;
        add_friend.country = country;
        
        user_profile.total_friend = user_profile.total_friend.
        checked_add(1).
        unwrap();
        
        Ok(())
    }

    pub fn add_status(
        ctx : Context<AddStatus>,
        status : String,
        name : String,
        profile_url : String,
    ) -> Result<()>{
        
        let user_profile = &mut ctx.accounts.user_profile;
        let status_account = &mut ctx.accounts.status_account;
        status_account.authority = ctx.accounts.authority.key();
        status_account.status_index = user_profile.status_index;
        status_account.init_time = ctx.accounts.clock.unix_timestamp;
        status_account.status = status;
        status_account.name = name;
        status_account.profile_url = profile_url;

        user_profile.status_index = user_profile.status_index
        .checked_add(1)
        .unwrap();

        user_profile.status_count = user_profile.status_count
        .checked_add(1)
        .unwrap();
        
        Ok(())
    }

    pub fn create_video(
        ctx : Context<AddVideo>,
        content : String,
        user_name : String,
        description : String,
        profile_url : String,
    ) -> Result<()> {
        let video_account  = &mut ctx.accounts.video_account;
        let user_profile = &mut ctx.accounts.user_profile;

        video_account.authority = ctx.accounts.authority.key();
        video_account.content = content;
        video_account.user_name = user_name;
        video_account.description = description;
        video_account.profile_url = profile_url;
        video_account.video_index = user_profile.video_index;
        user_profile.video_index = user_profile.video_index.
        checked_add(1)
        .unwrap();
        
        Ok(())
    }


   

    
}

#[derive(Accounts)]
#[instruction()]

pub struct InitializeUser<'info>{

    #[account(
        init,
        seeds = [USER_TAG , authority.key().as_ref()],
        bump,
        payer = authority,
        space = std::mem::size_of::<UserProfile>() + USER_NAME_LENGTH + USER_URL_LENGTH + USER_DESCRIPTION_LENGTH + 8,
    )]

    pub user_profile : Box<Account<'info , UserProfile>>,

    #[account(mut)]
    pub authority : Signer<'info>,

    pub system_program : Program<'info , System>,

    pub clock : Sysvar<'info , Clock>,
}

#[derive(Accounts)]
#[instruction()]

pub struct AddFriend<'info> {
    #[account(
        mut,
        seeds = [USER_TAG , authority.key().as_ref()],
        bump,
        has_one = authority,         
    )]

    pub user_profile : Box<Account<'info , UserProfile>>,

    #[account(
        init,
        seeds = [ADD_FRIEND , authority.key().as_ref() , &[user_profile.total_friend as u8].as_ref()],
        bump,
        payer = authority,
        space = std::mem::size_of::<FriendAccount>() + USER_NAME_LENGTH + USER_URL_LENGTH + USER_DESCRIPTION_LENGTH + 8,    
    )]

    pub add_friend : Box<Account<'info , FriendAccount>> ,

    #[account(mut)]
    pub authority : Signer<'info>, 

    pub system_program : Program<'info , System>,
    
}

#[derive(Accounts)]
#[instruction()]

pub struct AddStatus<'info>{
    #[account(
        mut,
        seeds = [USER_TAG , authority.key().as_ref()],
        bump,
        has_one = authority,
    )]

    pub user_profile : Box<Account<'info , UserProfile>>,

    #[account(
        init,
        seeds = [STATUS_TAG , authority.key().as_ref(), &[user_profile.status_index as u8].as_ref()],
        bump,
        payer = authority,
        space = std::mem::size_of::<StatusAccount>() + USER_STATUS_LENGTH + USER_NAME_LENGTH +  USER_URL_LENGTH +  8,
    )]

    pub status_account : Box<Account<'info , StatusAccount>>,

    #[account(mut)]
    pub authority : Signer<'info>,

    pub system_program : Program<'info , System>,

    pub clock : Sysvar<'info , Clock>,
    
}

#[derive(Accounts)]
#[instruction()]

pub struct AddVideo<'info> {
    #[account(
        mut,
        seeds = [USER_TAG , authority.key().as_ref()],
        bump,
        has_one = authority,
    )]

    pub user_profile : Box<Account<'info , UserProfile>>,

    #[account(
        init,
        seeds = [VIDEO_TAG , authority.key().as_ref() , &[user_profile.video_index as u8].as_ref()],
        bump,
        payer = authority,
        space = std::mem::size_of::<VideoAccount>() + USER_NAME_LENGTH + VIDEO_URL_LENGTH + VIDEO_DESCRIPTION_LENGTH + USER_URL_LENGTH + 8 ,
    )]

    pub video_account : Box<Account<'info , VideoAccount>>,

    #[account(mut)]
    pub authority : Signer<'info>,

    pub system_program : Program<'info , System>,

     
}

